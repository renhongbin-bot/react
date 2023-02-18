// import React, { Component } from 'react'

// export default class Tabbar extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.list.map((item, index) => (
//             <li onClick={() => this.handleClick(index)} className={this.props.current === index ? 'active' : ''} key={item.id}>
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
//   handleClick = (index) => {
//     this.props.event(index)
//   };
// }
const Tabbar = props => {
  return (
    <div>
      <ul>
        {props.list.map((item, index) => (
          <li onClick={() => props.event(index)} className={props.current === index ? 'active' : ''} key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabbar
