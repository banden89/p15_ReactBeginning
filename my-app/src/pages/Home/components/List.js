import Item from './Item'

const List = ({listData}) => {
    console.log('listData', listData)
    return <div className="list">
        {
            listData.map((item, index) => <Item key = {index} />)
        }
    </div>
}

export default List