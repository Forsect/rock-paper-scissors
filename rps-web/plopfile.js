const config = (plop) => {
  plop.setGenerator("Visual", {
    description: "Visual Component Generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter name: ",
      },
    ],
    actions: [
      {
        type: "addMany",
        base: "templates/visual",
        destination: "src/visuals/{{name}}",
        templateFiles: "templates/visual/*.hbs",
        stripExtensions: ["hbs"],
        verbose: true,
      },
      "- - - - - - - - - - - - - - - - - - - -",
      "Visual component created successfully!",
      "- - - - - - - - - - - - - - - - - - - -\n",
    ],
  });

  plop.setGenerator("Page", {
    description: "Page Component Generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter name: ",
      },
    ],
    actions: [
      {
        type: "addMany",
        base: "templates/page",
        destination: "src/pages/{{name}}",
        templateFiles: "templates/page/*.hbs",
        stripExtensions: ["hbs"],
        verbose: true,
      },
      "- - - - - - - - - - - - - - - - - - - -",
      "Page component created successfully!",
      "- - - - - - - - - - - - - - - - - - - -\n",
    ],
  });
};

module.exports = config;
