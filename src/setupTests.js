import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "@testing-library/jest-dom";
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import { createSerializer, toJson } from "enzyme-to-json";
import renderer from "react-test-renderer";
// import sinon from "sinon";

//Set the default serializer for Jest to be the from enzyme-to-json
//This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

//React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

//Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
global.renderer = renderer;
// global.sinon = sinon;
