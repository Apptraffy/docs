---
slug: /seller/styling-testing
sidebar_label: Step 4. Styling and Testing
---

# Step 4. Styling and Testing

<ul>
<li>
    You can style the tasks to fit your platform using CSS variables. Add a CSS file where you define the ```.traffy-custom``` class.
    Example (e.g., in customizeTasks.css):
```css
.traffy-custom {
    --traffy-taskElementCont-bg: #F7C5FF;
}
```
</li>
<li>
    You can change the text of rewards and tasks using the function (see specific examples below).
    ```js
    function onTaskRender(changeReward, changeCardTitle, changeDescription, changeButtonCheckText){
    }
    ```
</li>

<li>
To receive test tasks, use our script with (test="true"):
```
<script src="https://dvq1zz1g273yl.cloudfront.net/index_v1.1.0.min.js" traffy-key="Traffy Key" test="true"></script>
```
</li>

</ul>

## Examples of how a task might look:

### Classic version without a photo:

#### View:

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_no_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_no_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_no_photo_v1.webp"></img>
</div>

#### Styles:

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

### Classic version with a photo:

#### View:

1) The top shows the version with the task image set by the task creator.

2) The bottom shows the version with a fallback to the default image. You can change it through the field:

```css
--traffy-taskElementImageCont-background-image
```

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_with_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_with_photo_v1.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_with_photo_v1.webp"></img>
</div>

#### Styles:

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

### Alternative version without a photo:

#### View:

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_no_photo_v2.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_no_photo_v2.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_no_photo_v2.webp"></img>
</div>

#### Styles:

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

### Alternative version with a photo:

#### View:

1) The top shows the version with the task image set by the task creator.

2) The bottom shows the version with a fallback to the default image. You can change it through the field:

```css
--traffy-taskElementImageCont-background-image
```

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_with_photo_v2.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_with_photo_v2.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_with_photo_v2.webp"></img>
</div>

#### Style:

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