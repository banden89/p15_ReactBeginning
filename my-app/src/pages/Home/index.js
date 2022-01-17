import {useState} from 'react';
import Edit from './components/Edit'
import List from './components/List'
import './index.css'

const Home = () => {

    const [data, setData] = useState([1,2])
    // function plus() {
    //     setA(function (prev) {
    //         return prev + 200
    //     })
    // }
    return <div className="app">
        <Edit />
        <List listData = {data} />
    </div>
}

export default Home