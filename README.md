# 📦 App Orders - React Native

Sistema de gerenciamento de pedidos desenvolvido com **React Native** e **Expo**.

## 🎨 Visualização
<p align="center">
  <img src="./assets/demo-app-orders.gif" width="300" title="Demonstração do App">
</p>

## 🚀 Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo (SDK 54)](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://docs.expo.dev/router/introduction/) (Navegação baseada em arquivos)
- [Zustand](https://github.com/pmndrs/zustand) (Gerenciamento de estado global)
- [Vector Icons](https://icons.expo.fyi/)

## 📱 Como rodar o projeto

1. Clone o repositório: `git clone https://github.com/cidvieira/react-native-app-orders`
2. Instale as dependências: `npm install --legacy-peer-deps`
3. Inicie o servidor: `npx expo start`
4. Escaneie o QR Code com o app **Expo Go** (iOS/Android).

## 🛠️ Configurações Especiais
O projeto utiliza o motor **Hermes** e requer a flag `unstable_transformImportMeta` no `babel.config.js` para compatibilidade com a biblioteca Zustand.