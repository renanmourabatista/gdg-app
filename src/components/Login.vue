<template>
    <v-container>
        <v-form v-model="valid">
            <v-text-field
                    v-model="email"
                    :rules="nameRules"
                    :counter="10"
                    label="email"
                    required
            ></v-text-field>
            <v-text-field
                    type="password"
                    v-model="password"
                    :rules="emailRules"
                    label="E-mail"
                    required
            ></v-text-field>
        </v-form>
        <v-btn @click="submit">Enviar</v-btn>
    </v-container>
</template>
<script>
    import firebase from 'firebase'

    export default {
        name: "Login",
        data: () => ({
            valid: false,
            email: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            password: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
        }),
        methods: {
            submit: function(){
               const auth = firebase.auth();
               auth.signInWithEmailAndPassword(this.email, this.password)
                   .then(response => {
                       this.$router.push('/home')
                       console.log(response);
                   }).catch(error => {
                       alert(error.message)
               });
            }
        }
    }
</script>
<style></style>