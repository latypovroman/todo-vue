import axios from "axios";
import audio from "../assets/audio";

export const speech = {
    state: {
        audioUrl: '',
    },
    mutations: {
        setAudioBlob(state, url) {
            state.audioUrl = url;
        },
        playSpeech(state) {
            audio.src = `http://demo.telminov.ru:8090${state.audioUrl}`;
            audio.play();
        }
    },
    actions: {
        async fetchTTS(context, name) {
            const response = await axios.post(
                'http://demo.telminov.ru:8090/tts/',
                {text: name},
                {
                    headers: {
                        Authorization: 'Token 646af386d32f0312d1fdd36b78d323d07a1995e1'
                    }
                }
            );
            await context.commit('setAudioBlob', response.data.result_url);
            await context.commit('playSpeech');
        }
    },
    namespaced: true,
};