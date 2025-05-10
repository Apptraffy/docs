---
slug: /seller/first-view
sidebar_label: Шаг 2. Первая отрисовка заданий
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
```

# Шаг 2. Первая отрисовка заданий

### 2.1. Как выглядят задания Traffy (дефолтные стили):

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_no_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_no_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_no_photo_v1.webp"></img>
</div>


### 2.2. Вызовите рендер тестовых заданий.

- Перед вызовом метода, пожалуйста, убедитесь, что HTML-элемент контейнер существует. Базовый пример для React:

```mdx-code-block
<CodeBlock className="language-js" title="Пример на React:">
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
            if(traffyTasksVal) {
                window.Traffy.renderTasks(
                    traffyTasksVal,
                    {
                        max_tasks: 3,
                        onTaskLoad,
                        onTaskRender,
                        onTaskReward,
                        onTaskReject
                    },
        
                );
            }
        }, []);
        
        return (
            <>
                <div className="traffyTasks" ref={traffyTasks}></div>
                <div className="otherTasks"></div>
            </>
        )
    }
`}
</CodeBlock>
```

- Для вывода заданий на странице используется метод `window.Traffy.renderTasks`.
```mdx-code-block
<CodeBlock className="language-js" title="Функция запрашивает задания под конкретного пользователя и отображает их в traffyTasks контейнер:">
{`
   window.Traffy.renderTasks(
       traffyTasks,
       {
           max_tasks: 3,
           onTaskLoad: onTaskLoad,
           onTaskRender: onTaskRender,
           onTaskReward: onTaskReward,
           onTaskReject: onTaskReject
       },
   );
`}
</CodeBlock>
```

- Этот метод использует следующие функции:

```mdx-code-block
<CodeBlock className="language-js" title="Функция вызывается, когда задания загрузились:">
{`
   function onTaskLoad(tasks: Task[]) {
      console.log(tasks, "loaded");
   }
`}
</CodeBlock>
```

```mdx-code-block
<CodeBlock className="language-js" title="Функция вызывается, когда задания отрендерились:">
{`
    // Позволяет менять тексты задания в момент рендера
    function onTaskRender(
        changeReward: (str: string) => void,
        changeCardTitle: (str: string) => void,
        changeDescription: (str: string) => void,
        changeButtonCheckText: (str: string) => void
    ) {
        // Можете, например, форматировать награду
        // formatReward - например, ваша функция
        const reward = formatReward(12345);
        
        // Меняем текст награды
        changeReward(reward);
        
        // Также можно изменить и другие тексты, если необходимо:
        // changeCardTitle("Новый заголовок");
        // changeDescription("Новое описание");
        // changeButtonCheckText("Проверить");
    }
`}
</CodeBlock>
```

```mdx-code-block
<CodeBlock className="language-js" title="Функция вызывается, если задание прошло проверку:">
{`
    /**
    * - Функция предназначена для награждения пользователя за выполнение задания.
    *
    * - Вам передается уникальный signedToken, связывающий пользователя, 
    * ресурс и задание, действительный в течение 5 минут после выполнения.
    *
    * - Отправьте токен на ваш сервер, чтобы он сделал запрос на наш сервер для проверки 
    * его валидности и возможности начисления награды (апи для бэкэнда - в следующем шаге).
    *
    * - После успешного начисления награды сохраните токен 
    * в базе данных, чтобы исключить повторное использование.
    */
    function onTaskReward(task: Task, signedToken: string) {
        // Пример отправки запроса на сервер для верификации задания
        // (Имеет смысл только в production режиме)
        // const url = new URL('Your Endpoint');
        // url.searchParams.set("auth", "Your Auth");
        
        // fetch(url.toString(), {
        //     method: "POST",
        //     body: JSON.stringify({
        //         hash: signedToken
        //     }
        // }).then((res: Response) => {
        //     if (res.status === 200) {
        //         // Пример обновления баланса наград. Напишите свою функцию
        //         setBalance(state.traffy_reward, "add");
        //     }
        // }).catch(() => {
        //     // Обработка ошибок (например, вывод сообщения об ошибке)
        // });
    }
`}
</CodeBlock>
```

```mdx-code-block
<CodeBlock className="language-js" title="Функция вызывается, если задание не прошло проверку:">
{`
   function onTaskReject(task: Task) {
      // Здесь можно, например, отобразить уведомление об ошибке
      // alert("Задание не проходит проверку: " + task.title);
    }
`}
</CodeBlock>
```