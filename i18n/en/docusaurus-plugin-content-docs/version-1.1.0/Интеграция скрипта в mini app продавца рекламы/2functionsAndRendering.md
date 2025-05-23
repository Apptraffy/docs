---
slug: /seller/functions-render
sidebar_label: Step 2. Functions and Rendering.
---

# Step 2. Functions and Rendering.

### 2.1. Describe the necessary functions:

Example function descriptions:

```ts
type Task = {
    company_id: number, 
    title: string, 
    link: string, 
    photo_url: string
};

// Triggered when tasks are loaded
function onTaskLoad(tasks: Task[]) {
    console.log(tasks, "loaded");
}

// Triggered when the user fails the task validation check
function onTaskReject(task: Task) {
    // alert(task)
}

// Triggered when the user passes the task validation check
function onTaskReward(task: Task, signedToken: string) {
    // Send a request to your backend here to verify the task completion (see Step 3) and grant the reward.
    // In case of successful verification, grant the reward on the frontend.
    // For example:
    const url = new URL('Your Endpoint')
    url.searchParams.set("auth", "Yout Auth");
    fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify({
            task_id: task.company_id,
            hash: signedToken
        })
    }).then((res: Response) => {
        if(res.status === 200) {
            setBalance(state.traffy_reward, "add")
        }
    }).catch(() => {
    })
}

function onTaskRender(
   // Function to change the button text (on the right)
    changeReward: (str: string) => void, 
    // Function to change the title (default: "Subscribe on:")
    changeCardTitle: (str: string) => void,
    // Function to change the description (see examples in "Step 4. Styling and Testing")
    changeDescription: (str: string) => void, 
    // Function to change the button text in the "verification" state (default: "Check")
    changeButtonCheckText: (str: string) => void, 
) {
    const reward = formatReward(12345); 
    changeReward(reward);
}
```

### 2.2. Call the render:

```js
let traffyTasks: HTMLDivElement | undefined;
if(traffyTasks) {
    (window as any).Traffy.renderTasks(
        traffyTasks, 
        {
            // You can explicitly specify the maximum number of tasks
            // by default — 1.
            max_tasks: 1,
            onTaskLoad, 
            onTaskRender, 
            onTaskReward,
            onTaskReject
        }, 
    
    );
}
```
