/*
 * @Author: keke
 * @Date: 2023-07-26 06:19:46
 * @LastEditors: keke
 * @LastEditTime: 2023-07-27 00:24:37
 * @Description: 
 */
import { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "index.tsx",
        pattern: /(\/\/ component exports)/g,
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  });
}
