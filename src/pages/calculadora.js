import { React, useState } from "react";
import { ButtonGroup, Button, Form } from "react-bootstrap";

export default function Suma(props) {

  const [primerNumero, primerNumeroActualizado] = useState('');
  const [segundoNumero, segundoNumeroActualizado] = useState('');
  const [ resultado, resultadoActualizado ] = useState('');

  const actualizar_primer_numero = (event) => {
    primerNumeroActualizado(event.target.value);
  }

  const actualizar_segundo_numero = (event) => {
    segundoNumeroActualizado(event.target.value);
  }

  const Sumar = (event) => {
    console.log("soy presionado");
    const result = Number(primerNumero) + Number(segundoNumero);
    resultadoActualizado(result);
  };

  const Resta = (event) => {
    console.log("soy presionado");
    const result = Number(primerNumero) - Number(segundoNumero);
    resultadoActualizado(result);
  };
  const Multiplicacion = (event) => {
    console.log("soy presionado");
    const result = Number(primerNumero) * Number(segundoNumero);
    resultadoActualizado(result);
  };
  const Division = (event) => {
    console.log("soy presionado");
    const result = Number(primerNumero) / Number(segundoNumero);
    resultadoActualizado(result);
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Primer Numero</Form.Label>
        <Form.Control value={primerNumero} onChange={actualizar_primer_numero} type="text" placeholder="Escribe el numero" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Segundo Numero</Form.Label>
        <Form.Control value={segundoNumero} onChange={actualizar_segundo_numero} type="text" placeholder="Escribe el numero" />
      </Form.Group>
      <h4>El resultado es: {resultado} </h4>
      <ButtonGroup>
        <Button variant="primary" onClick={Sumar}>Suma</Button>
        <Button variant="success" onClick={Resta}>Resta</Button>
        <Button variant="warning" onClick={Multiplicacion}>Multiplicacion</Button>
        <Button variant="danger" onClick={Division}>Division</Button>
      </ButtonGroup>
    </Form>
  );
}

// import React, { Component } from 'react';

// class Calculator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       num1: '',
//       num2: '',
//       result: ''
//     };
//   }

//   handleNum1Change = (event) => {
//     this.setState({ num1: event.target.value });
//   }

//   handleNum2Change = (event) => {
//     this.setState({ num2: event.target.value });
//   }

//   handleAddition = () => {
//     const result = Number(this.state.num1) + Number(this.state.num2);
//     this.setState({ result });
//   }

//   handleSubtraction = () => {
//     const result = Number(this.state.num1) - Number(this.state.num2);
//     this.setState({ result });
//   }

//   handleMultiplication = () => {
//     const result = Number(this.state.num1) * Number(this.state.num2);
//     this.setState({ result });
//   }

//   handleDivision = () => {
//     const result = Number(this.state.num1) / Number(this.state.num2);
//     this.setState({ result });
//   }

//   render() {
//     return (
//       <div>
//         <input type="number" value={this.state.num1} onChange={this.handleNum1Change} />
//         <input type="number" value={this.state.num2} onChange={this.handleNum2Change} />
//         <button onClick={this.handleAddition}>+</button>
//         <button onClick={this.handleSubtraction}>-</button>
//         <button onClick={this.handleMultiplication}>*</button>
//         <button onClick={this.handleDivision}>/</button>
//         <p>El resultado es: <b>{this.state.result}</b></p>
//       </div>
//     );
//   }
// }

// export default Calculator;
