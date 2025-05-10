---
slug: /seller/styling
sidebar_label: Step 3. Styling
---

```mdx-code-block
import CodeBlock from '@theme/CodeBlock';
```

# Step 3. Styling

```mdx-code-block
<CodeBlock className="language-css" title="You can style tasks for your platform using CSS variables. Add a CSS file where you define the .traffy-custom class. (For example, in customizeTasks.css):">
{`
    .traffy-custom {
        --traffy-taskElementCont-bg: #F7C5FF;
    }
`}
</CodeBlock>
```

```mdx-code-block
<CodeBlock className="language-js" title="You can change the text of rewards and tasks using this function:">
{`
    // This is one of the functions passed to window.Traffy.renderTasks
    function onTaskRender(changeReward, changeCardTitle, changeDescription, changeButtonCheckText) {
        // see specific implementations below
    }
`}
</CodeBlock>
```

## Examples of Styled Tasks:

### Classic Version without Photo:

#### Preview:

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

### Classic Version with Photo:

#### Preview:

1) The first option displays the task image provided by the task creator.

2) The second option displays a fallback to the default image. You can change it via the field:

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

### Alternative Version without Photo:

#### Preview:

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

### Alternative Version with Photo:

#### Preview:

1) The first option displays the task image provided by the task creator.

2) The second option displays a fallback to the default image. You can change it via the field:

```css
--traffy-taskElementImageCont-background-image
```

<div class="responsive-grid">
    <img src="https://d36t0rmxsg07e0.cloudfront.net/default_with_photo_v2.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/openLink_with_photo_v2.webp"></img>
    <img src="https://d36t0rmxsg07e0.cloudfront.net/check_with_photo_v2.webp"></img>
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