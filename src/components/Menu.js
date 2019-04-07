import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from 'styled-components'

const Repair = styled.div`
	color: #464646;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`

const WorkTime = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`

const Calls = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const CallButton = styled.button`
	width: 173px;
	height: 45px;
	outline: none;
	border: none;
	border-radius: 30px;
	background-color: #3fc7db;
	color: #ffffff;
	font-size: 14px;
	font-weight: 400;
	line-height: 22.04px;
`
class Addres extends React.Component {
  render() {
    return(
      <span> {this.props.addr} </span>
    )
  }
}

class TelNumber extends React.Component {
  render() {
    return(
      <span> {this.props.tel} </span>
    )
  }
}

class Menu extends React.Component {
	render() {
		return (
			<Row>
				<Col lg={3}>
					<Repair>
						Ремонт айфонов в сервисном центре и на выезде
					</Repair>
				</Col>
				<Col lg={3} lgOffset={1}>
					<WorkTime>
						Пн-пт с 10 до 20, сб,вс с 11 до 18
						<Addres addr="Ленинская, 301"></Addres>
					</WorkTime>
				</Col>
				<Col lg={3}>
					<Calls>
					Звонки принимаются 24 часа
					<TelNumber tel="8 (846) 922 55 44 "></TelNumber>
					</Calls>
				</Col>
				<Col lg={2}>
					<CallButton>Заказать звонок</CallButton>
				</Col>
			</Row>
		)
	}
}

export default Menu