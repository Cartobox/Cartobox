<template>
    <div id="main" :class="{hidden: !store.showContactModal}">
        <div id="bg" @click="hideContactForm()"></div>
        <div id="contact-container">
            <div id="closeBTN" class="noSelect" @click="hideContactForm()">
                <div class="close"></div>
                <div class="close"></div>
            </div>
            <section class="left">
                <h2>Entre em contacto connosco</h2>

                <FormKit 
                    type="form"
                    id="form"
                    submit-label="Register"
                    @submit="submitHandler"
                    :actions="false"
                    #default="{ value }"
                >
                    <FormKit
                        type="text"
                        name="name"
                        label="Nome"
                        placeholder="Insira o seu nome"
                        validation="required"
                    />

                    <FormKit
                        type="email"
                        label="Email"
                        name="email"
                        validation="required|email"
                        validation-visibility="live"
                        placeholder="Insira o seu email"
                    />

                    <FormKit
                        type="tel"
                        label="Telemóvel"
                        name="tel"
                        placeholder="Insira o seu contacto"
                        validation="matches:/^[0-9]{9}$/|required"
                        :validation-messages="{
                            matches: 'Certifique-se que o número está correto',
                        }"
                        validation-visibility="dirty"
                    />

                    <FormKit
                        type="text"
                        name="empresa"
                        label="Empresa"
                        placeholder="Insira a sua empresa"
                        validation="required"
                    />

                    <FormKit
                        type="select"
                        label="Indique o assunto"
                        name="assunto"
                        :options="[
                            'Pedido de informação',
                            'Pedido de orçamento',
                            'Outro',
                        ]"
                        v-model="assunto"
                    />

                    <FormKit
                        type="text"
                        name="customassunto"
                        label="Assunto"
                        placeholder="Escreva o seu assunto"
                        validation="required"
                        v-if="assunto === 'Outro'"
                    />

                    <div id="orcamento" v-if="assunto === 'Pedido de orçamento'">
                        <FormKit
                            type="text"
                            name="modelo"
                            label="Modelo"
                            placeholder="Ex: 0207"
                            validation="required"

                            id="ModelosInput"
                        />
                        <span id="Modelos"><a href="https://www.fefco.org/sites/default/files/files/styles/thumbnail/public/FEFCO%20Code_WEBprotected.pdf" target="_blank">Verifique aqui os modelo disponíveis</a></span>
                        
                        <FormKit
                            type="select"
                            label="Tipo de Cartão"
                            name="tipocartao"
                            :options="[
                                'Micro',
                                'Fino',
                                'Largo',
                                'Duplo',
                                'Duplo Micro',
                                'Outro'
                            ]"
                        />
                        
                        <FormKit
                            type="text"
                            name="medidas"
                            label="Medidas da sua caixa"
                            placeholder="Ex: CxLxA"
                            validation="required"
                        />

                        <FormKit
                            type="text"
                            name="impressao"
                            label="Impressão"
                            placeholder="Ex: Impressão (Nº de cores e área)"
                            validation=""
                        />

                        <FormKit
                            type="number"
                            name="quantidade"
                            label="Quantidade"
                            value="500"
                            step="1"
                        />
                        
                    </div>

                    <FormKit
                        type="textarea"
                        label="Mensagem"
                        name="mensagem"
                        rows="10"
                        placeholder="Escreva a sua mensagem para nós"
                    />                    

                    <FormKit
                        type="submit"
                        label="Enviar"
                    />

                </FormKit>
                

            </section>
            <section class="right">
                <div id="circle">OU</div>
                <div class="item">
                    <img src="@/assets/icons/location.svg" alt="">
                    <span>                
                        <b>Morada:</b> Rua da Forcada, <br/>
                        S/N, Calços <br/>
                        2445-712 Martingança <br/>
                        <span class="small">(39.68440, -8.97201)</span>
                    </span>
                </div>
                <div class="item">
                    <img src="@/assets/icons/phone.svg" alt="">
                    <span>                
                        <b>Telefone:</b> 244 545 380 <br/>
                        <b>Telemóvel:</b> 960 364 411
                    </span>
                </div>
                <div class="item">
                    <img src="@/assets/icons/send.svg" alt="">
                    <span>                
                        <b>Email:</b> cartobox@cartobox.pt
                    </span>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
    import axios from "axios"
    import { setErrors, clearErrors, reset } from '@formkit/core'



    import { useMainStore } from '@/stores/main'
    const store = useMainStore()

    const submitted = ref(false);
    const assunto = ref("Pedido de informação")

    const hideContactForm = () => store.showContactModal = false;

    watch(store, async (newV, oldV) => {
        if (newV.showContactModal) {
            document.body.style.overflow = 'hidden';
            return;
        }
        document.body.style.overflow = 'visible';
    });

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const submitHandler = async (data: any) => {
        clearErrors("form");
        submitted.value = true
            
        const p = await new Promise(async (resolve, reject) => {

            //@ts-ignore
            await grecaptcha.ready(async function() {
                //@ts-ignore
                await grecaptcha.execute('6LclXzYmAAAAACni1BfBUnWJXg4Eb1b2KZ-8f4V5', {action: 'submit'}).then(async function(token) {
                    data.token = token
                    await axios.post('/.netlify/functions/sendEmail', data)
                    .then(function (response) {
                        if (response.status === 200) reset("form");
                    })
                    .catch(function (error) {
                        setErrors('form', ['Não foi possível enviar o email, tente novamente!'], {}) 
                        
                });
                resolve("OK")
            });
            });
            
        }).then(() => {
            return true
        })
        

        
    }

    
</script>

<style scoped lang="scss">
    #closeBTN {
        position: absolute;
        display: flex;
        top: .5em;
        left: .5em;
        width: 30px;
        aspect-ratio: 1 / 1;
        cursor: pointer;
        pointer-events: all;
        z-index: 120;

        .close {
            position: absolute;
            width: 100%;
            height: 3px;
            background: #fff;
            border-radius: 20px;
            top: 50%;
            transform-origin: center;
            transform: translateY(-50%);
            rotate: 45deg;

            &:nth-child(2) {
                rotate: -45deg;
            }
        }
    }
    
    #form {
        margin-top: 2em;
        background: #fff;
        padding: 20px;
        border-radius: .55em;
        color: #000000;
        
        @media (max-width: 1100px) {
            margin-bottom: 4em;
        }
    }

    a {
        all: unset;
    }

    .small {
        font-size: .6em !important;
    }

    #Modelos {
        margin-bottom: 1em;
        margin-top: .5em;
        display: block;
        font-size: 1em;
        color: var(--firstColor);
        cursor: pointer;
        transition: var(--transIn);

        &:hover {
            color: var(--secondColor);
            transition: var(--transOut);
        }
    }

    #bg {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0000007c;
    }

    #orcamento {
        background: rgb(244, 244, 244);
        padding: 20px;
        padding-left: 4em;
        margin-top: 1em;
        margin-bottom: 1em;
        border-radius: .3em;

        > :first-child {
            margin-bottom: 0;
        }
    }

    #main {
        z-index: 101;
        position: fixed;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: var(--transIn);

        &.hidden {
            transform: translateX(100%);
            transition: var(--transOut);
        }
    }

    h2 {
        @media (max-width: 500px) {
            font-size: 2em;
        }
    }

    section {
        display: block;
        width: 100%;

        @media (max-width: 1100px) {
            min-height: auto;
        }
    }

    #circle {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        line-height: 80px;
        color: #fff;
        text-align: center;
        font-size: 3rem;
        aspect-ratio: 1 / 1;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        background: #028BB5;;
        border-radius: 100%;

        @media (max-width: 1100px) {
            left: 50%;
            top: 0;
            transform: translateX(-50%) translateY(-50%);
        }
    }

    #contact-container {
        display: grid;
        grid-template-columns: 6fr 5fr;
        width: 88%;
        height: 100%;
        background: var(--firstColor);
        margin-left: auto;

        -webkit-box-shadow: -6px 0px 10px 7px rgba(0,0,0,0.18); 
        box-shadow: -6px 0px 10px 7px rgba(0,0,0,0.18);

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
            overflow-y: scroll;
            overscroll-behavior: none;
        }

        .left {
            color: #fff;
            overflow-y: scroll;

            @media (max-width: 1100px) {
                overflow-y: visible;
            }

            &::-webkit-scrollbar {
                width: 8px;
            }   

            &::-webkit-scrollbar-track {
                background-color: #0000004c;
            }

            &::-webkit-scrollbar-thumb {
                background-color: #ffffffe2;
            }

            scrollbar-width: thin;
            scrollbar-color: transparent #e0e0e0;
        }

        .right {
            width: 100%;
            height: 100%;
            background: #028BB5;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media (max-width: 1100px) {
                align-items: center;
            }

            .item {
                margin-top: 3rem;
                display: flex;
                flex-direction: row;
                color: #fff;
                align-items: center;
                width: max-content;
                font-weight: 100;

                @media (max-width: 1100px) {
                    width: auto;
                }
                
                span {
                    font-size: 1.4rem;

                    @media (max-width: 800px) {
                        font-size: 1.1rem;
                    }

                    @media (max-width: 500px) {
                        font-size: 1rem;
                    }

                    
                }

                img {
                    display: block;
                    width: 60px;
                    padding-right: 1em;

                    @media (max-width: 800px) {
                        width: 50px;
                    }

                    @media (max-width: 500px) {
                        width: 40px;
                    }
                }
            }
        }
    }

    h2 {
        text-align: center;
        color: #fff;
    }
</style>