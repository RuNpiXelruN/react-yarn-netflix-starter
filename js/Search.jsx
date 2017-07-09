import React, { Component } from 'react'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import preload from '../data.json'
import ShowCard from './ShowCard'

const Header = styled.h1`
	font-size: 32px;
	font-family: sans-serif;
	color: #3ec770;
`

const Container = styled.div`
	width: 80%;
	margin-left: 10%;
`

const SearchInput = styled.input`width: 30%;`

const ResultsWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`

const SearchNav = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`

class Search extends Component {
	state = {
		searchTerm: ''
	}

	handleSearchInputChange = e => {
		this.setState({ searchTerm: e.target.value })
	}
	render() {
		return (
			<Container>
				<SearchNav>
					<Header>
						{'Notflix'}
					</Header>
					<SearchInput
						value={this.state.searchTerm}
						onChange={this.handleSearchInputChange}
						placeholder="Enter show name..."
						type="text"
					/>
				</SearchNav>
				<ResultsWrapper>
					{preload.shows
						.filter(
							show =>
								`${show.title} ${show.description}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >= 0
						)
						.map(show => <ShowCard key={show.imdbID} {...show} />)}
				</ResultsWrapper>
			</Container>
		)
	}
}

export default Search
