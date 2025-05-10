---
slug: /seller/styling-testing
sidebar_label: Шаг 2. Стилизация и тестирование
---

# Шаг 2. Стилизация и тестирование

<ul>
<li>
    Вы можете стилизовать задания под вашу площаку, используя css-переменные. Добавьте css файл, в котором опишите класс ```.traffy-custom.```
    Пример (например в customizeTasks.css):
```css
.traffy-custom {
    --traffy-taskElementCont-bg: #F7C5FF;
}
```
</li>
<li>
    Текст наград и заданий вы можете менять с помощью функции (см. конкретные примеры ниже)
    ```js
    function onTaskRender(changeReward, changeCardTitle, changeDescription, changeButtonCheckText){
    }
    ```
</li>

<li>
Для того, чтобы получить тестовые задания, используйте наш скрипт в виде (test="true"):
```
<script src="https://dvq1zz1g273yl.cloudfront.net/index_v1.1.0.min.js" traffy-key="Traffy Key" test="true"></script>
```
</li>

</ul>

## Примеры того, как может выглядеть задание:

### Классический вариант без фото:

#### Вид:

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_no_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_no_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_no_photo_v1.webp"></img>
</div>

#### Стили:

```css
.traffy-custom {
    --traffy-buttonRewardImage-background-image: url('https://d36t0rmxsg07e0.cloudfront.net/coin.webp');
    --traffy-buttonRewardImage-background-size: 16px;

    --traffy-buttonCheckRewardImage-background-image: none;
    --traffy-buttonCheckRewardImage-background-size: 0;

    --traffy-taskElementButtonText-padding-left: 4px;

    --traffy-taskElementImageCont-display: block;
    --traffy-taskElementInfoCont-gap: 10px;

    --traffy-taskElementInstructionCont-width: 150px;
}
```

#### JS:

```js
function onTaskRender(changeReward, changeCardTitle, changeDescription, changeButtonCheckText){
    changeReward("200K");
    changeCardTitle("Subscribe on: ");
    changeButtonCheckText("Check")
}
```

### Классический вариант c фото:

#### Вид:

1) Сверху представлен вариант с картинкой задания, которую установил создатель задания.

2) Внизу представлен вариант c фолбэком на дефолтную картинку. Можете поменять через поле:

```css
--traffy-taskElementImageCont-background-image
```

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_with_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_with_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_with_photo_v1.webp"></img>
</div>

#### Стили:

```css
.traffy-custom {
    --traffy-buttonRewardImage-background-image: url('https://d36t0rmxsg07e0.cloudfront.net/coin.webp');
    --traffy-buttonRewardImage-background-size: 16px;

    --traffy-buttonCheckRewardImage-background-image: none;
    --traffy-buttonCheckRewardImage-background-size: 0;

    --traffy-taskElementButtonText-padding-left: 4px;

    --traffy-taskElementImageCont-display: block;
    --traffy-taskElementInfoCont-gap: 10px;

    --traffy-taskElementInstructionCont-width: 150px;
}
```

#### JS:

```js
function onTaskRender(changeReward, changeCardTitle, changeDescription, changeButtonCheckText){
    changeReward("200K");
    changeCardTitle("Subscribe on: ");
    changeButtonCheckText("Check")
}
```

### Альтернативный вариант без фото:

#### Вид:

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_no_photo_v2.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_no_photo_v2.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_no_photo_v2.webp"></img>
</div>

#### Стили:

```css
.traffy-custom {
    --traffy-buttonRewardImage-background-image: url('https://d36t0rmxsg07e0.cloudfront.net/arrow.webp');
    --traffy-buttonRewardImage-background-size: 24px;
    --traffy-taskElementButtonContOuter-padding: 0;
    --traffy-taskElementButtonText-padding-left: 0;
    --traffy-taskElementButtonContOuter-background-color: none;

    --traffy-buttonLoader-border: 2px solid rgba(142, 142, 147, 1);

    --traffy-buttonCheckRewardImage-background-image: none;
    --traffy-buttonCheckRewardImage-background-size: 0;

    --traffy-taskElementButtonCheckText-color: rgba(0, 122, 255, 1);
    --traffy-taskElementButtonCheckText-font-size: 14px; 

    --traffy-taskElementChannelText-color: black;
    --traffy-taskElementButtonText-padding-left: 4px;

    --traffy-taskElementInstructionInfoCont-flex-direction: row;
    --traffy-taskElementInstructionInfoCont-gap: 0px;

    --traffy-taskElementInstructionDescriptionCont-display: flex;
    --traffy-taskElementInstructionDescriptionCont-gap: 2px;
    --traffy-taskElementInstructionDescriptionImg-image: url('https://d36t0rmxsg07e0.cloudfront.net/coin.webp');
    --traffy-taskElementInstructionDescriptionImg-size: 14px;
    --traffy-taskElementInstructionDescriptionText-color: rgba(142, 142, 147, 1);
}
```

#### JS:

```js
function onTaskRender(changeReward, changeCardTitle, changeDescription, changeButtonCheckText){
    changeDescription("200K");
    changeButtonCheckText("Check")
}
```

### Альтернативный вариант c фото:

#### Вид:

1) Сверху представлен вариант с картинкой задания, которую установил создатель задания.

2) Внизу представлен вариант c фолбэком на дефолтную картинку. Можете поменять через поле:

```css
--traffy-taskElementImageCont-background-image
```

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_with_photo_v2.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_with_photo_v2.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_with_photo_v2.webp"></img>
</div>

#### Стили:

```css
.traffy-custom {
    --traffy-buttonRewardImage-background-image: url('https://d36t0rmxsg07e0.cloudfront.net/arrow.webp');
    --traffy-buttonRewardImage-background-size: 24px;
    --traffy-taskElementButtonContOuter-padding: 0;
    --traffy-taskElementButtonText-padding-left: 0;
    --traffy-taskElementButtonContOuter-background-color: none;

    --traffy-buttonLoader-border: 2px solid rgba(142, 142, 147, 1);

    --traffy-buttonCheckRewardImage-background-image: none;
    --traffy-buttonCheckRewardImage-background-size: 0;

    --traffy-taskElementButtonCheckText-color: rgba(0, 122, 255, 1);
    --traffy-taskElementButtonCheckText-font-size: 14px; 

    --traffy-taskElementChannelText-color: black;
    --traffy-taskElementButtonText-padding-left: 4px;

    --traffy-taskElementInstructionInfoCont-flex-direction: row;
    --traffy-taskElementInstructionInfoCont-gap: 0px;

    --traffy-taskElementInstructionDescriptionCont-display: flex;
    --traffy-taskElementInstructionDescriptionCont-gap: 2px;
    --traffy-taskElementInstructionDescriptionImg-image: url('https://d36t0rmxsg07e0.cloudfront.net/coin.webp');
    --traffy-taskElementInstructionDescriptionImg-size: 14px;
    --traffy-taskElementInstructionDescriptionText-color: rgba(142, 142, 147, 1);

    --traffy-taskElementImageCont-display: block;
    --traffy-taskElementInfoCont-gap: 10px;
}
```

#### JS:

```js
function onTaskRender(changeReward, changeCardTitle, changeDescription, changeButtonCheckText){
    changeDescription("200K");
    changeButtonCheckText("Check")
}
```