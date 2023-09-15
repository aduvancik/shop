import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Стіл сірий",
          img: "chair-white.webp",
          desc: "Lorem ipsum dolor sit amet, conseler adipusing.",
          category: "chairs",
          price: "49.99"
        },
        {
          id: 2,
          title: "Лампа чорна",
          img: "light-black.jpg",
          desc: "Lorem ipsum dolor sit amet, conseler adipusing.",
          category: "light",
          price: "129.99"
        },
        {
          id: 3,
          title: "Лампа біла",
          img: "light-white.png",
          desc: "Lorem ipsum dolor sit amet, conseler adipusing.",
          category: "light",
          price: "189.99"
        },
        {
          id: 4,
          title: "Диван",
          img: "sofa.jpg",
          desc: "Lorem ipsum dolor sit amet, conseler adipusing.",
          category: "sofa",
          price: "13.99"
        },
        {
          id: 5,
          title: "Шафа біла",
          img: "wardrobe-white.jpg",
          desc: "Lorem ipsum dolor sit amet, conseler adipusing.",
          category: "wardrobe",
          price: "79.99"
        },
        {
          id: 6,
          title: "Шафа чорна",
          img: "wardrobe-black.webp",
          desc: "Lorem ipsum dolor sit amet, conseler adipusing.",
          category: "wardrobe",
          price: "31.99"
        },
        {
          id: 7,
          title: "Стільчик",
          img: "tables-white.webp",
          desc: "Lorem ipsum dolor sit amet, conseler adipusing.",
          category: "tables",
          price: "49.99"
        },
      ],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategories = this.chooseCategories.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
  return (
    <div className='wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategories={this.chooseCategories}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} item={this.state.fullItem} onShowItem={this.onShowItem}/>}
      <Footer />
    </div>
  )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategories(category) {
    if(category === "all") {
      this.setState({currentItems: this.state.items});
      return
    }
    
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true;
      }
    })
    if(!isInArray) {
    this.setState({orders: [...this.state.orders, item] })
    }
  }
}
export default App;