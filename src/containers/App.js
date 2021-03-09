import React ,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    
    // using constructor for establishing the state of the 'waifus' 'searchProperty'
    constructor() {
        super();
        this.state = {
            waifus: [],
            searchProperty: ''
        }
    }

    onSearchProperty = (event) => {
        this.setState({searchProperty: event.target.value})        
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({waifus: users}));
    }

    render() {
        const filterWaifus = this.state.waifus.filter(waifu => {
            return waifu.name.toLowerCase().includes(this.state.searchProperty.toLowerCase());
        });
        
        if(this.state.waifus.length === 0) {
           return <h1> Loading iopt </h1>
        }
        else {
            return (
                <div className="tc">
                    <h1> Waifu List </h1>
                    <SearchBox searchProperty={this.onSearchProperty}/>
                    <Scroll>
                    <CardList waifus={filterWaifus} />
                    </Scroll>
                </div>
            )
        }
    }
}


export default App;