const tags = [
    "E-mail",
    "Intradata",
    "Notion",
    "Dominion local",
    "Wildixin",
    "Tawk",
    "ClickUp",
    "Skype"
  ];
  
  const formulario = document.getElementById("formulario");
  const tagsDiv = document.getElementById("tags");
  const selecionarTodosCheckbox = document.getElementById("selecionarTodos");
  
  // Preencher as tags no formulário
  tags.forEach(tag => {
    const formGroup = document.createElement("div");
    formGroup.className = "form-group-inline tag-wrapper";
  
    const label = document.createElement("label");
    label.textContent = tag;
  
    const input = document.createElement("input");
    input.type = "text";
    input.className = "form-control";
  
    const checkboxDiv = document.createElement("div");
    checkboxDiv.className = "form-check";
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";
    checkbox.name = "desativado";
    
    const checkboxLabel = document.createElement("label");
    checkboxLabel.textContent = "Desativado";
    checkboxLabel.className = "form-check-label";
    
    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(checkboxLabel);
  
    formGroup.appendChild(label);
    formGroup.appendChild(input);
    formGroup.appendChild(checkboxDiv);
    
    tagsDiv.appendChild(formGroup);
  });
  
  // Lidar com a seleção de todos os checkboxes
  selecionarTodosCheckbox.addEventListener("change", function() {
    const checkboxes = document.querySelectorAll('input[name="desativado"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = selecionarTodosCheckbox.checked;
    });
  });
  
  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir o envio do formulário
    
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const nomeSobrenome = nome + " " + sobrenome;
    
    const dados = {
      "Nome e Sobrenome": nomeSobrenome
    };
  
    // Obter os valores das tags e marcações preenchidos pelo usuário
    tags.forEach((tag, index) => {
      const valor = document.querySelectorAll(`input[placeholder="${tag}"]`)[index].value;
      const desativado = document.querySelectorAll(`input[name="desativado"]`)[index].checked;
      
      const tagObj = {
        valor: valor,
        desativado: desativado
      };
      
      dados[tag] = tagObj;
    });
  
    console.log(dados);
    formulario.reset();
  });
  