# FixedLayout

`{ position: fixed }` не дружит с `{ transform: translate }` на родителе, поэтому для позиционирования фиксированных блоков внутри панели, необходимо использовать FixedLayout в качестве обертки.

Для удобства есть свойство `vertical`, с помощью которого можно "прижать" контент к верху или низу. При этому будут учитываться высота шапки и прочие системные отступы.

**Важно**: блок с `{ position: fixed }` находится не в потоке. В примере можно увидеть, что у блока с основным контентом есть паддинги. Они там не случайны.

<!-- TODO: Пример -->
