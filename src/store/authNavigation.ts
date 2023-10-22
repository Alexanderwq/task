import {defineStore} from "pinia";
import AuthSection from "@/components/AuthSection.vue";
import CodeVerificationSection from "@/components/CodeVerificationSection.vue";
import ComponentsList from "@/types/ComponentsList";
import {Component} from "vue";
import RegistrationCompletedSection from "@/components/RegistrationCompletedSection.vue";
import NameSection from "@/components/NameSection.vue";
import GeoSection from "@/components/GeoSection.vue";
import ComponentNames from "@/types/ComponentNames";

type State = {
    currentSection: ComponentNames,
}

export const useAuthNavigation = defineStore('authNavigation', {
    state: (): State => {
        return {
            currentSection: ComponentNames.AuthSection,
        }
    },

    getters: {
        getCurrentComponent(state: State): Component {
            const components: ComponentsList = {
                AuthSection,
                CodeVerificationSection,
                RegistrationCompletedSection,
                NameSection,
                GeoSection,
            }

            return components[state.currentSection];
        },
    },

    actions: {
        setSection(section: ComponentNames): void {
            this.currentSection = section
        },
    },
})