import { MoonStar, SunMoon } from 'lucide-react';
import { useState } from 'react';
import './App.css';
import { domingo, sabado } from './integrantes';



function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [day, setDay] = useState('sabado');

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode');
  };
  const toggleTable = (change: string) => {
    setDay(()=> change)
  }
  function showTable(){
  const dia = (day == 'sabado') ? sabado:domingo;
       return(<table>
          <thead>
            <tr >
              <th>Horário</th>
            {dia[0].map((evento, index) => (
                  <th key={"titulo"+index}>{evento.local}</th>
              ))
            } 
            </tr>
          </thead>
          <tbody>
            {
              dia.map((horario,index)=>(
                <tr>                
                <td  className='horario'>{7+index*2+':00'}</td>
                  {horario.map((evento)=>(
                    <td>  {evento.pessoa1}
                    {evento.pessoa2 && ` e ${evento.pessoa2}`}
                    {evento.pessoa3 && ` e ${evento.pessoa3}`}</td>
                  ))}
                </tr>
              ))
            }
          
          </tbody>
        </table>);
  }
  return (
    <main> 
       <button className={isDarkMode ? 'theme dark-mode' : 'theme '} onClick={toggleDarkMode}>
        {isDarkMode ? <MoonStar size={30} />  : <SunMoon size={30} />}
      </button>
      <h1>Programação Transito EJC 2023</h1>
      <div className='button-area'>
      <button className={day ==='sabado' ? 'dia selected' : 'dia'} onClick={()=>toggleTable('sabado')}>
        <h2>Tabela Sábado</h2>
      </button>
      <button className={day ==='domingo' ? 'dia selected' : 'dia'} onClick={()=>toggleTable('domingo')}>
        <h2>Domingo</h2>
      </button>
      </div>
      <div>
      
        {showTable() } 
      </div>
    </main>
  )
}

export default App
