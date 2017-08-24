import React, { Component } from 'react'; 
import Index from './components/Index/Index';                 // 首页
import List from './components/List/List';                    // 订单页
import Member from './components/Member/Member';              // 会员中心页
import AppFooter from './components/AppFooter/AppFooter';     // 底部

import Merchant from './components/Merchant/Merchant';        // 商家详情页

import './scss/reset.css'; 
import './scss/public.css';
import './font/style.css'; 
 
class App extends Component{
  render(){ 
    return (
      <div>
        <Index></Index>
      	<Merchant></Merchant>
    		<List></List>
    		<Member></Member>
    		<AppFooter></AppFooter>
      </div>
      );
  };
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import shopcar from './imgs/shopcar.png';
// import list from '../public/list.png';
// import Search from './components/Search/Search';
// import './App.css';
// import './font/iconfont.css';

// const $ = window.$;

// // eslint-disable-line
// console.log();   

// class App extends Component {
//   // constructor(props){
//   //   super(props);
//   // }

//   componentDidMount(){
//     $('.text').html('哈哈哈')
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload. <a href="about.html">查看详情</a>
//         </p>
//         <div>{new Date().toLocaleTimeString()}</div>
//         <Search></Search>
//         <img src={list} className="App-logo" alt="logo" />
//         <img src={process.env.PUBLIC_URL + '/list.png'} className="App-logo" alt="logo" />
//         <div>
//           字体图标 
//             <span className="iconfont icon-list3"></span>
//             <span className="iconfont icon-home"></span>
//             <span className="iconfont icon-star"></span>
//             <span className="iconfont icon-close"></span>
//         </div>
//         <div className="text"></div>
//       </div>
//     );
//   }
// } 

// export default App;

// import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// const Home = ({history, match}) => {
//   console.log(history);
//   console.log(match);

//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// // const About = () => {
// //   console.log(3);

// //   return (
// //     <div>
// //       <h2>About</h2>
// //     </div>
// //   )
// // }

// class About extends Component{
//   componentDidMount(){
//     console.log('About ----- Mount');
//   }
//   componentWillUnmount(){
//     console.log('About ----- unMount');
//   }
//   render(){
//     return (
//       <div>
//         <h2>About</h2>
//       </div>
//     );
//   }
// }

// class Topic extends Component{
//   constructor(props){
//     super(props);
//   }

//   componentDidMount(){
//     console.log('Topic ----- Mount');
//   }

//   componentWillUnmount(){
//     console.log('Topic ----- unMount');
//   }
//   render(){
//     console.log('TTT');
//     return (
//       <div>
//         <h3>{this.props.match.params.topicId}</h3>
//       </div>
//     );
//   }
// }

// // const Topic = ({ match }) => {
// //   console.log(1);
// //   return (
// //     <div>
// //       <h3>{match.params.topicId}</h3>
// //     </div>
// //   );
// // }
  
// const Detail = ({match})=>{
//   return (
//     <div>
//       路由地址：<strong>{match.path}</strong>
//     </div>
//     );
// }

// const Topics = ({ match }) => {
//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>
//             Rendering with React
//           </Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>
//             Components
//           </Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       <Route path={`${match.url}/:topicId`} component={Topic}/>  
//       <Route path={`${match.url}/:topicId`} component={About}/>
//       <Route exact path={match.url} render={() => (  
//         <h3>Please select a topic.</h3>
//       )}/>
//       <Route path='/topics/rendering' render={({match}) => {
//         console.log(2);
//         return ( 
//           <h3>Please select a.</h3> 
//         );
//       }}/>
//     </div>
//   )
// }

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about/">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Route path="/about" children={({match})=>{
//         console.log(!!match);
//         return (
//           <div>是否匹配到:{match ? '是' : '否'}</div>
//           );
//       }}></Route>
//       <Route exact path="/" component={Home}/>
//       <Route exact path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )
// export default BasicExample