import './accessories.css';
import Footer from './footer';


function Accessories(){
    return(
        <div className='Equep'>
            <h1>Цены в клубе</h1>
                <p>PC</p>
                <table>
                    <tr>
                        <th>Комплектующие</th>
                        <th>Название</th>
                    </tr>
                    <tr>
                        <td>Процессор</td>
                        <td>Intel Core i5-10400F 2900 МГц</td>
                    </tr>
                    <tr>
                        <td>Видеокарта</td>
                        <td>GEFORCE RTX 3050 8 Гб</td>
                    </tr>
                    <tr>
                        <td>Охлаждение</td>
                        <td>Deepcool GAMMAXX 300 R</td>
                    </tr>
                    <tr>
                        <td>Оперативная память</td>
                        <td>16Гб DDR4 RGB 3000 МГц</td>
                    </tr>
                    <tr>
                        <td>Материнская плата</td>
                        <td>Gigabyte H410M</td>
                    </tr>
                    <tr>
                        <td>Блок питания</td>
                        <td>500W RaidMax</td>
                    </tr>
                    <tr>
                        <td>Корпус</td>
                        <td>500W RaidMax</td>
                    </tr>
                    <tr>
                        <td>Монитор</td>
                        <td>Acer Nitro KG272Sbmiipx 27"</td>
                    </tr>
                    <tr>
                        <td>Мышь</td>
                        <td>Logitech G102 LightSync</td>
                    </tr>
                    <tr>
                        <td>Клавиатура</td>
                        <td>A4TECH Bloody B820R</td>
                    </tr>
                </table>

                <p>Vip</p>
                <table>
                    <tr>
                        <th>Комплектующие</th>
                        <th>Название</th>
                    </tr>
                    <tr>
                        <td>Процессор</td>
                        <td>Intel Core i5-12600KF 3700 МГц</td>
                    </tr>
                    <tr>
                        <td>Видеокарта</td>
                        <td>PALIT GЕFORCE RTX 3060 12Гб</td>
                    </tr>
                    <tr>
                        <td>Охлаждение</td>
                        <td>ID-COOLING SE-224-RGB</td>
                    </tr>
                    <tr>
                        <td>Оперативная память</td>
                        <td>16Гб DDR4 RGB 3000 МГц</td>
                    </tr>
                    <tr>
                        <td>Материнская плата</td>
                        <td>ASUS PRIME H610M-K D4</td>
                    </tr>
                    <tr>
                        <td>Блок питания</td>
                        <td>500W be quiet!</td>
                    </tr>
                    <tr>
                        <td>Корпус</td>
                        <td>Zalman Z7 Neo Black</td>
                    </tr>
                    <tr>
                        <td>Монитор</td>
                        <td>SunWind SUN-M27BA108 27"</td>
                    </tr>
                    <tr>
                        <td>Мышь</td>
                        <td>Logitech G102 LightSync</td>
                    </tr>
                    <tr>
                        <td>Клавиатура</td>
                        <td>A4TECH Bloody B820R</td>
                    </tr>
                </table>
                <Footer/>
        </div>
    )
}

export default Accessories;