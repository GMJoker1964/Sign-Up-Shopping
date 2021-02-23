/* eslint-disable */
import React, { Component } from 'react';
import { actFilterPrice, actSortPrice } from '../../actions'
import { findManyProduct } from '../../API'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Filter extends Component {
	constructor(props){
		super(props)
		this.state = {
			endPrice: 0,
			startPrice: 0,
			sortBy: 0,
			sort:0
		}
	}

	componentDidMount() {
		let startPrice = new URLSearchParams(window.location.search).get('startPrice')
		let endPrice = new URLSearchParams(window.location.search).get('endPrice')
		let sortBy = new URLSearchParams(window.location.search).get('sortBy')
		let sort = new URLSearchParams(window.location.search).get('sort')

		this.setState({
			startPrice,
			endPrice,
			sortBy,
			sort
		})
		
		// findManyProduct('','', startPrice, endPrice,sortBy,sort)
		// 	.then(listproducts => {
		// 		this.props.onFilterPrice(listproducts)
		// 		this.props.onSortPrice(listproducts)
		// 	})
	}

	onFilterPrice = () => {
		let { startPrice, endPrice } = this.state
		let reload = () => setTimeout(() => window.location.reload(), 100)
		let category_id = new URLSearchParams(window.location.search).get('category')
		
		return (
			<div className="row row1 scroll-pane">
				<Link
					to={`/product?category=${category_id}&startPrice=0&endPrice=200`}
					onClick={reload}>
						<label className="checkbox"><input type="radio" name="checkbox" checked={startPrice == 0 && endPrice == 200} onChange={this.onChange} /><i></i>0 - 200$ </label>
				</Link>
				<Link
					to={`/product?category=${category_id}&startPrice=200&endPrice=400`}
					onClick={reload}>
						<label className="checkbox"><input type="radio" name="checkbox" checked={startPrice == 200 && endPrice == 400}  onChange={this.onChange}/><i></i>200$ - 400$ </label>
				</Link>
				<Link 
					to={`/product?category=${category_id}&startPrice=400&endPrice=600`}
					onClick={reload}> 
						<label className="checkbox"><input type="radio" name="checkbox" checked={startPrice == 400 && endPrice == 600}  onChange={this.onChange}/><i></i>400$ - 600$  </label>
				</Link>
				<Link 
					to={`/product?category=${category_id}&startPrice=600&endPrice=800`}
					onClick={reload}>
						<label className="checkbox"><input type="radio" name="checkbox" checked={startPrice == 600 && endPrice == 800} onChange={this.onChange}/><i></i>600$ - 800$ </label>
				</Link>
				<Link
					to={`/product?category=${category_id}&startPrice=800&endPrice=1000`}
					onClick={reload}> 
						<label className="checkbox"><input type="radio" name="checkbox" checked={startPrice == 800 && endPrice == 1000} onChange={this.onChange}/><i></i>800$ - 1000$ </label>
				</Link>
				<Link 
					to={`/product?category=${category_id}&startPrice=1000&endPrice=9999`}
					onClick={reload}>
					<label className="checkbox"><input type="radio" name="checkbox" checked={startPrice == 1000 && endPrice == 9999} onChange={this.onChange}/><i></i>1000$ - Upto  </label>
				</Link>
			</div>
		)
	}
	onSortPrice= (products) =>{
		let { sortBy,sort } = this.state
		let reload = () => setTimeout(() => window.location.reload(), 100)
		let category_id = new URLSearchParams(window.location.search).get('category')

		return (
			<div className="row row1">
				<Link 
					to={`/product?category=${category_id}&sortBy=createdAt&sort=desc`}
					onClick={reload}>
						<label className="checkbox">Mới nhất</label></Link>
				<Link 
					to={`/product?category=${category_id}&sortBy=createdAt&sort=desc`}
					onClick={reload}>
						<label className="checkbox">Cũ nhất</label></Link>
				<Link 
					to={`/product?category=${category_id}&sortBy=price&sort=desc`}
					onClick={reload}>
						<label className="checkbox">Giá cao nhất</label></Link>
				<Link 
					to={`/product?category=${category_id}&sortBy=price&sort=asc`}
					onClick={reload}>
						<label className="checkbox">Giá thấp nhất</label>
				</Link>
			</div>
		)
	}

	render() {
		let { products } = this.props
		return (
			<div className="col-md-3 rsidebar">
				<div className="rsidebar-top">
					<div className="slider-left">
						<h4> Sắp xếp </h4>
						{this.onSortPrice(products)}
					</div>
					<div className="slider-left">
						<h4>Lọc theo giá</h4>
						{this.onFilterPrice(products)}

					</div>
					<br /><br /><br /><br />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		products: state.products.products
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onFilterPrice: (products) => {
			dispatch(actFilterPrice(products))
		},
		onSortPrice: (products) => {
			dispatch(actSortPrice(products))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Filter));
