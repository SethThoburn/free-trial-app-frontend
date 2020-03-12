import React, { Component } from 'react'
import 'resources/main.css'

export class Home extends Component {
  render() {
    const cards = [
      {
        name: 'Netflix', 
        description: 'Checkout our 30-day free trial!',
        label: (<i class="fab fa-neos fa-2x"></i>),
      },
      {
        name: 'Hulu',
        description: 'Checkout our 15-day free trial!',
        label: (<i class="fas fa-h-square fa-2x"></i>)
      },
      {
        name: 'Walmart',
        description: 'Checkout our 30-day free trial!',
        label: (<i class="fas fa-shopping-bag fa-2x"></i>)
      },
      {
        name: 'Spotify',
        description: 'Checkout our 30-day free trial!',
        label: (<i class="fab fa-spotify fa-2x"></i>)
      },
      {
        name: 'Amazon', 
        description: 'Checkout our 30-day free trial!', 
        label: (<i class="fab fa-amazon fa-2x"></i>)
      },
      {
        name: 'ConsignCloud', 
        description: 'Checkout our 30-day free trial!',
        label: (<i class="fas fa-tags fa-2x"></i>)
      },
    ]

    return (
      <div class="container">

        {/* Navbar */}
        <div class="nav-container">
          <div class="nav-inner">
            <div class="nav">
              <div class="logo">
                <i class="fas fa-dollar-sign fa-2x"></i>
              </div>
              <div class="links">
                <ul>
                  <li><a href="#">All Trials</a></li>
                  <li><a class="active" href="#">Active</a></li>
                </ul>
                <ul>
                  <li class="border-right">Welcome, Bryant</li>
                  <li><a href="#">Settings</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
        {/* <!-- Showcase --> */}
        <div class="main-container">
          <div class="showcase">
            <div class="showcase-inner">
              <div class="showcase-header">
                <div class="header-left">
                  <h3>Active Trials</h3>
                  <p>APRIL - MAY</p>
                </div>
                <div class="header-right">
                  <ul>
                    <li><a href="#">Filters</a></li>
                    <li><a href="#"><i class="far fa-star"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="showcase-body">
                {cards.map(({name, description, label}) => (
                  <div class="card">
                    {label}
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="#">Get Started</a>
                    <p class="small">14 Days left</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
