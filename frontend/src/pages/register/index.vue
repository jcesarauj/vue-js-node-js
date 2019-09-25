 <template>
 <v-form ref="form" lazy-validation>
  <v-card color="grey lighten-4" flat class="box-centralized">
      <v-card-text>
        <v-subheader>Sou novo por aqui =)</v-subheader>
        <v-container fluid grid-list-md>
          <v-layout row>
              <v-flex xs12 sm6 md12>
                <v-select :items="[{ text: 'Protético', value: 1 },
                 { text: 'Dentista', value: 2 },
                 { text: 'Funcionário do lab.', value: 3 }]" label="Sou um?" v-model="register.profission"></v-select>
              </v-flex>
          </v-layout>
          <v-layout row>
              <v-flex xs12 sm6 md12 v-if="register.profission != 1 ">
                <v-select :items="[{ text: 'Lab do josé', value: 1 },
                 { text: 'lab 2', value: 2 },
                 { text: 'lab 3', value: 3 }]" label="Laboratório" v-model="register.protetic"></v-select>
              </v-flex>
          </v-layout>
          <v-layout row>
              <v-flex xs12 sm6 md12>
                  <v-switch
                      :label="`Pessoa jurídica: ${(register.personType ? 'SIM' : 'NÃO')}`"
                      v-model="register.personType">
                      </v-switch>
              </v-flex>
          </v-layout>
          <v-layout row>
              <v-flex xs6 sm3 md6>
                  <v-switch
                      color="success"
                      :label="`descodonto?: ${(register.descodonto ? 'SIM' : 'NÃO')}`"
                      v-model="register.descodonto">
                      </v-switch>                      
              </v-flex>
              <v-flex xs6 sm1 md6>                
                  <v-icon @click="register.tooltipShow = !register.tooltipShow">info</v-icon> 
                  <v-flex xs3 sm1 md3>
                    <v-layout flex wrap row justify-space-between>
                    <v-tooltip v-model="register.tooltipShow" top>
                      <v-btn slot="activator"></v-btn>
                      <span>Com o descodonto você pode exibir seus serviços em uma loja completa</span>
                    </v-tooltip>
                     </v-layout>  
                  </v-flex>     
              </v-flex>  
          </v-layout>
          <v-layout row v-if="register.personType">
              <v-flex xs12 sm6 md12>
                <v-text-field v-model="register.companyName" 
                box label="Razão social"
                :rules="register.companyNameRules"
                ></v-text-field>
              </v-flex>
          </v-layout>
          <v-layout row v-if="!register.personType">
              <v-flex xs12 sm6 md12>
                <v-text-field v-model="register.name" box label="Nome"
                :rules="register.nameRules"></v-text-field>
              </v-flex>
          </v-layout>
          <v-layout row wrap v-if="register.personType">
              <v-flex xs6 sm3 md6 >
                <v-text-field v-model="register.cnpj" box label="CNPJ" 
                :mask="register.cnpjMask"
                :rules="register.cnpjRules"></v-text-field>
              </v-flex>
              <v-flex xs6 sm3 md6>
                <v-text-field v-model="register.ie" box label="IE"
                :rules="register.ieRules"></v-text-field>
              </v-flex>
          </v-layout>
           <v-layout row wrap v-if="!register.personType">
              <v-flex xs6 sm3 md6>
                <v-text-field v-model="register.cpf" box label="CPF" :mask="register.cpfMask"
                :rules="register.cpfRules"></v-text-field>
              </v-flex>
              <v-flex xs6 sm3 md6>
                <v-text-field v-model="register.rg" box label="RG"
                :rules="register.rgRules"></v-text-field>
              </v-flex>
          </v-layout>
          <v-layout row>
              <v-flex xs12 sm6 md12>          
                <v-text-field
                  name="input-1-3"
                  label="Telefone"
                  single-line
                  prepend-icon="phone"
                  :mask="register.phoneMask"
                  v-model="register.phone"
                  :rules="register.phoneRules"
                ></v-text-field>
              </v-flex>
          </v-layout>
          <v-layout row>
              <v-flex xs12 sm6 md12>  
                  <v-text-field
                    v-model="register.email"
                    :rules="register.emailRules"
                    label="E-mail"                    
                  ></v-text-field>
              </v-flex>
          </v-layout>
          <v-layout row>
              <v-flex xs12 sm6 md12>
                <v-text-field v-model="register.address" box label="Endereço"
                :rules="register.addressRules"></v-text-field>
              </v-flex>
          </v-layout>
          <v-layout row wrap>
              <v-flex xs6 sm3 md6>
                <v-text-field v-model="register.neighborhood" box label="Bairro"
                :rules="register.neighborhoodRules"></v-text-field>
              </v-flex>
              <v-flex xs6 sm3 md6>
                <v-text-field v-model="register.zipCode" box label="CEP" 
                :mask="register.cepMask"
                :rules="register.zipCodeRules"></v-text-field>
              </v-flex>
          </v-layout>
          <v-layout row wrap>
              <v-flex xs6 sm3 md6>
                <v-select :items="[{ text: 'SP', value: 1 },
                 { text: 'PR', value: 2 },
                 { text: 'PB', value: 3 }]" label="Estado"
                 v-model="register.state"
                 :rules="register.stateRules"></v-select>
              </v-flex>
              <v-flex xs6 sm3 md6>
                <v-select :items="[{ text: 'Porto Feliz', value: 1 },
                 { text: 'São Paulo', value: 2 },
                 { text: 'Curitiba', value: 3 }]" label="Cidade"
                 v-model="register.city"
                 :rules="register.cityRules"></v-select>
              </v-flex>
          </v-layout>
          <v-layout row>
              <v-flex xs12 sm6 md12>
                <v-text-field 
                v-model="register.login" box label="Login"
                :rules="register.loginRules"></v-text-field>
              </v-flex>
          </v-layout>
          <v-layout row>
              <v-flex xs12 sm6 md12>
                <v-text-field 
                v-model="register.password" 
                label="Senha" box loading
                :rules="register.passwordRules"
                :type="'password'">
                <v-progress-linear
                  slot="progress"
                  :value="progressPass"
                  :color="colorPass"
                  height="7"
                ></v-progress-linear>
                </v-text-field>
              </v-flex>
          </v-layout>
           <v-layout row>
              <v-flex xs12 sm6 md12>
                <v-text-field 
                v-model="register.confirmPassword" 
                label="Confirme a senha" box loading 
                :rules="register.confirmPasswordRules"
                :type="'password'">
                <v-progress-linear
                  slot="progress"
                  :value="progressConfirmPass"
                  :color="colorConfirmPass"
                  height="7"
                ></v-progress-linear>
                </v-text-field>
              </v-flex>              
          </v-layout>       
           <v-layout row>
              <v-flex xs12 sm6 md12>
                <v-btn
                  :loading="register.loadingRegister"
                  :disabled="register.loadingRegister || register.valid"
                  color="info"
                  @click="submit">
                  Salvar
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                  </span>
                </v-btn> 
              </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
    </v-form>
 </template>  

<script src="./index.js"/>
<style lang="css" src="./index.css"/>