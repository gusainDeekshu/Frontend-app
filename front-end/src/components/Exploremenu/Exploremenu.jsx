import { menu_list } from '../../assets/assets'
import  './Exploremenu.css'

function Exploremenu() {
  return (
<div id="exploremenu" className="exploremenu">
<h1>Explore our menu</h1>
<p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolores corrupti atque sunt adipisci. Reprehenderit recusandae possimus veritatis assumenda minus, ratione neque aut quidem doloribus, similique a, esse eum ipsam!</p>
<div className="explore-menu-list">
  {menu_list.map((item,index)=>{
    return (
      <div key={index} className="explore-menu-list-item">
        <img src={item.menu_image} alt="" />
        <p>{item.menu_name}</p>

      </div>
    )
  })}
  </div>

</div>
  )
}

export default Exploremenu
