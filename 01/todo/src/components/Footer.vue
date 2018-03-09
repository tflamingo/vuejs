<template>
    <div class="footer">
        <span>Written by {{ author }}</span><br>
        <span>Copyright 2017 - {{ endTime }}</span>
    </div>
</template>

<style>
.footer{
  margin-top: 40px;
  text-align: center;
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
</style>

<script>
export default{
  data() {
        return {
            author: 'TFlamingo',
            endTime: '2018'
        }
    }
}
</script>