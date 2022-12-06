O Controle financeiro da SOP (Superintendência de Obras Públicas) é realizado de forma resumida por três Entidades de negocio:

1. DESPESA 
   -> Que agrega informações referente aos processos financeiros da instituição.

2. EMPENHO 
   -> Que garante o comprometimento do governo em executar a divida referente as despesas.

3. PAGAMENTO 
   -> Que efetiva a execução da dividas da instituição.

Uma DESPESA deve conter no minimo as seguintes informações:

-[x]Número de protocolo
-[x]Tipo de Despesa
-[x]Data do Protocolo
-[x]Data de vencimento
-[x]Credor da Despesa
-[x]Descrição da Despesa
-[x]Valor da Despesa

Um EMPENHO deve conter no minimo as seguintes informações:

-[x]Ano do Empenho
-[x]Número do Empenho
-[x]Data do Empenho
-[x]Valor do Empenho
-[x]Observação

Um PAGAMENTO deve conter no minimo as seguintes informações:

-[x]Ano do Pagamento
-[x]Número do Pagamento
-[x]Data do Pagamento
-[x]Valor do Pagamento
-[x]Observação

Para efeito de modelagem, deve-se saber que:
1. Uma Despesa pode ter nenhum ou vários Empenhos.
2. Um Empenho podem ter nenhum ou varios Pagamentos. 
3. Um Pagamento obrigatoriamente pertence a um Empenho.
4. Um Empenho obrigatoriamente pertence a uma Despesa.

A DESPESA deve ainda conter um controle da situação através dos Status Abaixo:

1. Aguardando Empenho 
   -> Despesa Registrada, mas nenhum empenho associado.

2. Parcialmente Empenhada 
   -> Despesa onde a soma dos valores empenhados é inferior ao valor da despesa

3. Aguardando Pagamento 
   -> Despesa onde a soma dos valores empenhados é igual ao valor da despesa. Mas não possui registro de pagamento.

4. Parcialmente Paga 
   -> Despesa onde a soma dos valores pagos é inferior ao valor da despesa

5. paga 
   -> Despesa onde a soma dos valores pagos ao valor da despesa

Mais alguns requisitos a serem considerados
- [x] O Número do protocolo da despesa deve ser unico.
- [x] Os atributos: (Número e Ano) do Empenho Não pode ser registrado mais de uma vez.
- [x] Os atributos: (Número e Ano) do Pagamento Não pode ser registrado mais de uma vez.
- [x]Não deve ser permitido deletar um Empenho que tenha ao menos um Pagamento associado.
- [x]Não deve ser permitido deletar uma Despesa que tenha ao menos um Empenho assoaciado.

Com base nas Informações acimas: 

- Deve ser criado a Modelagem UML que achar necessaria.
- Deve ser criado o script de banco de dados para os objetos de banco de dados 

- Desenvolva uma pequena aplicação que permita:

1. Entrada de dados referente a: DESPESA, EMPENHO, PAGAMENTO.
2.[x] Consultas Relação de Despesa usando filtros de: (Data protocolo, Tipo Despesa, Credor )
3. Consultas Relação de Empenho usando filtros de: (Periodo de Data de empenho)
4. Consultas Relação de Pagamento usando filtros de: (Periodo de Data de Pagamento)

Requisitos Técnicos:
- [x]A aplicação deve ser desenvolvida para ambiente WEB e/ou Mobile:
- [x]Uso de Banco de Dados relacional (Preferivel Postgres)

Observação
-> O material referente ao projeto (diagramas, codigo, recursos,...) deve ser disponibilizado em ambiente de versionamento como: github, bitbucket, gitlab