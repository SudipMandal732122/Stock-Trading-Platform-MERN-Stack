import React from "react";

import {render, screen} from "@testing-library/react";

import "@testing-library/jest-dom";



import Hero from "../landing_page/home/Hero";

//test Suite

describe("Hero Component", ()=>{
    test("render hero image", ()=>{
        render(<Hero/>);
        const heroImg=screen.getByAltText("Hero Image");
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAttribute("src","media/images/homeHero.png");
    });
});