
# Шаг 2. Функции и рендер

### 2.1. Опишите необходимые функции:

Пример описания функций:

```ts
type Task = {
    company_id: number, 
    title: string, 
    link: string, 
    photo_url: string
};

//Происходит когда задания загрузились
function onTaskLoad(tasks: Task[]) {
    console.log(tasks, "loaded");
}

//Происходит, когда пользователь не прошел проверку выполнения задания
function onTaskReject(task: Task) {
    // alert(task)
}

//Происходит, когда пользователь прошел проверку выполнения задания
function onTaskReward(task: Task, signedToken: string) {
    //Отправьте здесь запрос на ваш бэкенд для того 	
    //чтобы верифицировать выполнение задания (см. шаг 3) и начислить награду.
    //В случае успешной верификации начислите награду на фронтенде
    //Например:
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
    // функция меняет текст кнопки (справа)
    changeReward: (str: string) => void, 
    // функция меняет название (дефолтное: "Subscribe on:")
    changeCardTitle: (str: string) => void,
    // функция меняет описание (смотрите примеры в "Шаге 4. Стилизация и тестирование")
    changeDescription: (str: string) => void, 
    // функция меняет текст кнопки в состоянии "проверка" (дефолтное: "Check")
    changeButtonCheckText: (str: string) => void, 
) {
    const reward = formatReward(12345); 
    changeReward(reward);
}
```

### 2.2. Вызовите рендер:

```js
let traffyTasks: HTMLDivElement | undefined;
if(traffyTasks) {
    (window as any).Traffy.renderTasks(
        traffyTasks, 
        {
            //можно явно указать максимальное количество заданий
            //по умолчанию — 1.
            //max_tasks: number | undefined
            max_tasks: 1,
            onTaskLoad, 
            onTaskRender, 
            onTaskReward,
            onTaskReject
        }, 
    
    );
}
```
