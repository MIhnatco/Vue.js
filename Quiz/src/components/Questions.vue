<template>
     <div class="questions-ctr">

        <div class="progress">
            <div class="bar" :style="{width: `${(questionsAnswered / questions.length) * 100}%`}"></div>
            <div class="status">{{questionsAnswered}} out of {{ questions.length }} questions answered</div>
        </div> <!-- /progress-->

        <transition-group name="fade">

            <div class="single-question" 
                        v-for="(question, index) in questions" 
                        :key="question.q" 
                        v-show="questionsAnswered === index">
    
                <div class="question">{{question.q}}</div>
                <div class="answers">
                    <div class="answer" 
                            v-for="answer in question.answers" 
                            :key="answer.text"
                            @click.prevent = 'selectAnswer(answer.is_correct)'
                    >
                        {{answer.text}}
                    </div>
                   
                </div>
    
            </div><!-- /single-question -->

        </transition-group>

    </div> <!-- /questions-ctr -->
</template>

<script>
    export default {
        name: "Questions",
        emits: ['question-answered'],
        props: ['questions', 'questionsAnswered'],
        methods: {
            selectAnswer(is_correct){
                this.$emit('question-answered', is_correct)
            }
        }
    }
</script>

