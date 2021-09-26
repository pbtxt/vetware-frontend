import * as React from "react";
import CommonPageLayout from "../CommonPageLayout";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AuthRegister: React.FC = () => {
  return (
    <CommonPageLayout>
       <Form>
        <Label>Registro</Label>
      <FormGroup>
        <Label for="email`">Correo electrónico</Label>
        <Input type="email" name="email" id="email" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="name">Nombre</Label>
        <Input type="text" name="name" id="Name" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="address">Direccion</Label>
        <Input type="text" name="address" id="address" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Contraseña</Label>
        <Input type="text" name="password" id="password" placeholder="" />
      </FormGroup>
      <Button>Ingresar</Button>
    </Form>
    </CommonPageLayout>
  );
};

export default AuthRegister;