React Styled-Component

css파일과 class명이 없이
style을 component화 하여, props를 직접 전달하여 스타일을 변화 시킬 수 있게 한다.

Color Pink Site
https://flatuicolors.com/

Add Styled-component
yarn add styled-component

injectGlobalStyle ==> createGlobalStyle 로 변경..
createGlobalStyle 스타일을 component화(export const {변수명}) 해주고,
<{변수명} /> 을 render해주어야 적용이 가능하다..

const {변수} = {스타일 변수1}.withComponent() ==> style 기존에 있는걸 확장..
<{변수} /> 로 스타일 적용..

extend...
기존이에서 변경..
const {스타일 변수2} = {스타일 변수1}.withComponent().extend`\`에서 const {스타일 변수3} = styled({스타일 변수2})`\` 으로 변경된듯..
<{스타일 변수3} /> 으로 스타일 적용..

keyframes...

attr 추가도 가능...
const {변수} = styled.{태그}.attr({}) 형태로 변수 추가..

Mixin..
const {변수} = css`\` 으로 선언..
타 스타일에서 \${변수} 로 호출가능..
스타일을 그룹화 하여 동일 스타일을 여러군데서 사용할 수 있다.

theme 적용..
style-components 의 ThemeProvider import..
theme js import...
render 에서 <ThemeProvider> 태그를 사용 가능..
태그 안의 theme js 파일 import 를 theme 값으로 전달..
<ThemeProvider> 하위의 태그들 style 에서 js 파일의 props 를 사용 할 수 있다..

nesting..
태그 하위의 모든 스타일 변수들을 선택하여 변경 가능..
const {스타일 변수} = styled.{태그}`${하위 스타일 변수} { }`
식으로 하위의 스타일 변수들을 변경 가능.

react-native 도 동일..
근데 왜 안되는지는 모르겠다...
extra
https://github.com/nomadcoders/styled-awesomeness/blob/fdb5d0d7ca29ab83dc4519c03ed76ab37a9d5c34/extras.md
