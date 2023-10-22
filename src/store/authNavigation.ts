import {defineStore} from "pinia";
import AuthSection from "@/components/AuthSection.vue";
import CodeVerificationSection from "@/components/CodeVerificationSection.vue";
import ComponentsList from "@/types/ComponentsList";
import {Component} from "vue";
import RegistrationCompletedSection from "@/components/RegistrationCompletedSection.vue";
import NameSection from "@/components/NameSection.vue";
import GeoSection from "@/components/GeoSection.vue";

type State = {
    currentSection: string,
}

export const useAuthNavigation = defineStore('authNavigation', {
    state: (): State => {
        return {
            currentSection: 'AuthSection',
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
        setSection(section: string): void {
            this.currentSection = section
        },
    },
})