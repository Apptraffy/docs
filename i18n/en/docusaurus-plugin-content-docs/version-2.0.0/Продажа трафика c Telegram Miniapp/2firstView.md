---
slug: /seller/first-view
sidebar_label: Step 2. Initial Task Rendering
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
```

# Step 2. Initial Task Rendering

### 2.1. How Traffy Tasks Appear by Default:

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_no_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_no_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_no_photo_v1.webp"></img>
</div>

### 2.2. Render Test Tasks

- Before calling the method, please ensure that the container HTML element exists. Below is a basic React example:

```mdx-code-block
<CodeBlock className="language-js" title="Example in React:">
{`
    type Task = {
        id: string;
        title: string;
        image_url: string | null;
        link: string;
    }
    
    export function TasksComponent() {
        const traffyTasks = useRef(null);
        
        function onTaskLoad(tasks: Task[]) {}
        function onTaskRender(
            changeReward: (str: string) => void,
            changeCardTitle: (str: string) => void,
            changeDescription: (str: string) => void,
            changeButtonCheckText: (str: string) => void
        ) {
            changeReward("200K");
            changeCardTitle("Subscribe on: ");
            changeButtonCheckText("Check");
        }
        function onTaskReward(task: Task, signedToken: string) {}
        function onTaskReject(task: Task) {}
        
        useEffect(() => {
            const traffyTasksVal = traffyTasks.current;
            if (traffyTasksVal) {
                window.Traffy.renderTasks(
                    traffyTasksVal,
                    {
                        max_tasks: 3,
                        onTaskLoad,
                        onTaskRender,
                        onTaskReward,
                        onTaskReject,
                    }
                );
            }
        }, []);
        
        return (
            <>
                <div className="traffyTasks" ref={traffyTasks}></div>
                <div className="otherTasks"></div>
            </>
        );
    }
`}
</CodeBlock>
```

- To display tasks on the page, use the method `window.Traffy.renderTasks`.

```mdx-code-block
<CodeBlock className="language-js" title="This function fetches tasks for a specific user and renders them in the traffyTasks container:">
{`
   window.Traffy.renderTasks(
       traffyTasks,
       {
           max_tasks: 3,
           onTaskLoad: onTaskLoad,
           onTaskRender: onTaskRender,
           onTaskReward: onTaskReward,
           onTaskReject: onTaskReject,
       },
   );
`}
</CodeBlock>
```

- This method uses the following functions:

```mdx-code-block
<CodeBlock className="language-js" title="Function called when tasks are loaded:">
{`
   function onTaskLoad(tasks: Task[]) {
      console.log(tasks, "loaded");
   }
`}
</CodeBlock>
```

```mdx-code-block
<CodeBlock className="language-js" title="Function called when tasks are rendered:">
{`
    // Allows modifying task texts during render
    function onTaskRender(
        changeReward: (str: string) => void,
        changeCardTitle: (str: string) => void,
        changeDescription: (str: string) => void,
        changeButtonCheckText: (str: string) => void
    ) {
        // For example, format the reward with your custom function, e.g., formatReward
        const reward = formatReward(12345);
        
        // Update the reward text
        changeReward(reward);
        
        // Other texts can also be modified if necessary:
        // changeCardTitle("New Title");
        // changeDescription("New Description");
        // changeButtonCheckText("Check");
    }
`}
</CodeBlock>
```

```mdx-code-block
<CodeBlock className="language-js" title="Function called when a task passes verification:">
{`
    /**
    * This function rewards the user for completing a task.
    *
    * A unique signedToken is provided, linking the user, resource, and task, and it is valid for 5 minutes after task completion.
    *
    * Send the token to your server, which should then request our server to verify its validity and grant the reward 
    * (backend API details are provided in the next step).
    *
    * After successfully granting the reward, store the token in your database to prevent duplicate usage.
    */
    function onTaskReward(task: Task, signedToken: string) {
        // Example request to the server for task verification
        // (Applicable in production mode only)
        // const url = new URL('Your Endpoint');
        // url.searchParams.set("auth", "Your Auth");
        
        // fetch(url.toString(), {
        //     method: "POST",
        //     body: JSON.stringify({
        //         hash: signedToken
        //     })
        // }).then((res: Response) => {
        //     if (res.status === 200) {
        //         // Example to update the reward balance. Implement your function accordingly.
        //         setBalance(state.traffy_reward, "add");
        //     }
        // }).catch(() => {
        //     // Handle errors (e.g., display an error message)
        // });
    }
`}
</CodeBlock>
```

```mdx-code-block
<CodeBlock className="language-js" title="Function called when a task fails verification:">
{`
   function onTaskReject(task: Task) {
      // For example, display an error notification:
      // alert("Task failed verification: " + task.title);
    }
`}
</CodeBlock>
```