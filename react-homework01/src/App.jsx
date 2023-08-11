import Button from './components/Button.jsx';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Button 
      background={"#1BABFC"} 
      content={"로그인"}
      hoverBackground={"#1B3FFC"}
      />
      <Button background={"#7CD0FF"} content={"로그인"} />
      <Button 
      background={"#CECECE"} 
      content={"취소"} 
      hoverBackground={"#7D7F81"} 
      />
      <Button 
      background={"#272727"} 
      content={"회원가입"}
      hoverBackground={"#1966B3"}
      />
    </div>
  );
}

export default App
