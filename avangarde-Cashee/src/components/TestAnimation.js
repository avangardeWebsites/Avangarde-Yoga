import React, { Component } from "react";
import './TestAnimation.css';
import * as THREE from "three";

class TestAnimation extends Component {
    componentDidMount() {
      // === THREE.JS CODE START ===
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      const canvas = document.querySelector("canvas.webgl");
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
      var geometry = new THREE.BoxGeometry( 1, 1, 1 );
      var material = new THREE.MeshBasicMaterial( { color: "#ff6033" } );
      var cube = new THREE.Mesh( geometry, material );
      scene.add( cube );
      camera.position.z = 4;
      var animate = function () {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
      };
      animate();
      // === THREE.JS EXAMPLE CODE END ===
    }
    render() {
      return (
        <div />
      )
    }
  }

export default TestAnimation