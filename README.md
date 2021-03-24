## Star Wars
![app](https://user-images.githubusercontent.com/16241890/112282342-c8992f80-8c65-11eb-9d16-c5a0fc5e90a0.gif)

## Proposta
  <p align="left">
   O Star Wars é um aplicativo para ver informações da série de filme! Nele você pode ver sobre personagens, planetas, naves, filmes, veículos e espécies
</p>

## Pré-Requisitos
* React Native 0.64

```JAVASCRIPT
yarn install
cd ios && pod install
```

## Libs Utilizadas
Aqui estão os pods que foram utilizados para a construção deste app! Estes pods agilizam e melhoram a performace da aplicação
* [Lottie](https://github.com/react-native-community/lottie-react-native)
<br/>Lib para animações em formato json
* [React Native Elements](https://react-native-training.github.io/react-native-elements/)
<br/>UI Toolkit para elementos prontos
* [Router Flux](https://github.com/aksonov/react-native-router-flux)
<br/>Facilita o manuseio das páginas (rotas) da apliacação, além de facilitar nas actions da mesma
* [Redux](https://redux.js.org/)
<br/>Armazenamento dos estados na store a partir de uma action do usuário
* [Swr](https://github.com/vercel/swr)
<br/>SWR é uma biblioteca React Hooks para busca de dados remotos.
* [Moment](https://redux.js.org/)
<br/>Lib para formatação da Data

<!-- GETTING STARTED -->
## Conhecendo os Arquivos
Aqui estão os arquivos e suas devidas funcionalidades dentro desta aplicação

* <b>src/Welcome/index.tsx</b>
<br/><p>  - Aqui é a tela de bem vindo! Aqui abaixo está sua demonstração</p> 
![Welcome](https://user-images.githubusercontent.com/16241890/112283120-8fad8a80-8c66-11eb-8027-d014c5ec399c.png)

* <b>src/Choose/index.tsx</b>
<br/><p>  - Aqui é a tela para escolher quais informações deseja saber! Aqui abaixo está sua demonstração</p> 
![Choose](https://user-images.githubusercontent.com/16241890/112283241-b370d080-8c66-11eb-8848-b0ecd8975b8c.png)

* <b>src/List/index.tsx</b>
<br/><p>  - Aqui é a tela que lista os dados escolhidos na tela anterior! Aqui abaixo está sua demonstração</p> 
![List](https://user-images.githubusercontent.com/16241890/112283314-c71c3700-8c66-11eb-883e-4b0ce022ce8f.png)

* <b>src/Detail/index.tsx</b>
<br/><p>  - Aqui é a tela de detalhes das informações do item selecionado! Aqui abaixo está sua demonstração</p> 
![Detail](https://user-images.githubusercontent.com/16241890/112283413-e2874200-8c66-11eb-89e3-4a564f0faeeb.png)

* <b>src/Components</b>
<br/><p>  - Esta rota contém os componentes utilizados na aplicação, como botão, card e item de lista</p> 

* <b>src/Services</b>
<br/><p>  - Esta rota controla as configurações da API</p> 

* <b>src/Utils</b>
<br/><p>  - Esta rota controla os extras da aplicação, como animações e carregamento</p> 




