import {Component} from "vue";
import ComponentNames from "@/types/ComponentNames";

type ComponentsList = {
    [key in ComponentNames]: Component;
}

export default ComponentsList