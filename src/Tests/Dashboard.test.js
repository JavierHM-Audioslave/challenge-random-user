import Enzyme , { mount } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import Dashboard from '../Components/Dashboard';
import configureStore from '../Store';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });


const store = configureStore();
afterEach(cleanup);
beforeEach(() => {
    render(
        <Provider store={store}>
            <Dashboard/>
        </Provider>
    );
});

const users = [
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Javier",
            last: "Monardo"
        },
        location: {
            city: "Castelar",
            state: "Buenos Aires",
            country: "Argentina"
        },
        email: "javiermonardo@gmail.com",
        login: {
            uuid: "11518aa9-956b-43f3-ad17-722e3f1f1e3e",
            username: "javier-monardo",
            password: "123",
            picture: {
                large: "https://randomuser.me/api/portraits/women/22.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/22.jpg"
            }
        }
    },

    {
        gender: "female",
        name: {
            title: "Mrs",
            first: "Alice",
            last: "Pelletier"
        },
        location: {
            city: "Chelsea",
            state: "New Brunswick",
            country: "Canada"
        },
        email: "alice.pelletier@example.com",
        login: {
            uuid: "1333f8d8-4bfc-4b35-8db9-70f00d8eae47",
            username: "organickoala267",
            password: "care1839",
            picture: {
                large: "https://randomuser.me/api/portraits/women/27.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/27.jpg"
            }
        }
    }

];



describe("Dashboard component", () => {
    it("Title is USERS", () => {
        expect(screen.getByTestId("title").textContent).toEqual("USERS");
    });

    it("The value \"Search By Name\" for label exists", () => {
        expect(screen.getByText(/Search By Name/i)).toBeInTheDocument();
    });

    it("The input's placeholder is Javier Monardo", () => {
        expect(screen.getByPlaceholderText("Javier Monardo")).toBeInTheDocument();
    });

    // it("", () => {
    //     const wrapper = render( 
    //         <Provider store={store}>
    //             <Dashboard/>
    //         </Provider>
    //     );
    //     screen.debug();
    //     const input = wrapper.getByPlaceholderText("Javier Monardo");
    //     input.value = 
    // });
});