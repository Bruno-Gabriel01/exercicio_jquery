$(document).ready(function () {
    // 1. Captura o envio do formulário
    $('form').on('submit', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

        // 2. Captura o texto do input
        let novaTarefa = $('#Nome-da-Tarefa').val();

        // 3. Verifica se o campo não está vazio
        if (novaTarefa.trim() !== '') {
            // 4. Adiciona a tarefa na lista <ul>
            $('ul').append(`<li>${novaTarefa}</li>`);

            // 5. Limpa o campo de input
            $('#Nome-da-Tarefa').val('');
        }
    });

    // 6. Adiciona o efeito de "riscado" ao clicar no item da lista
    $('ul').on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through');
    });
});