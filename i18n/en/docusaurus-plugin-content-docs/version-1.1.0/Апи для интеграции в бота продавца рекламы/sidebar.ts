import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "version-1.1.0/Интеграция продавца-бота/traffy-bot-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "version-1.1.0/Интеграция продавца-бота/get-pick-tasks",
          label: "Get tasks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "version-1.1.0/Интеграция продавца-бота/get-is-subscribed",
          label: "Check subscription",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
