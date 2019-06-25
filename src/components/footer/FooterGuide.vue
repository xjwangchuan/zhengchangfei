<template>
    <div id="footGuide">
        <van-tabbar v-model="active" class="active_tab">
            <van-tabbar-item
                v-for="(item,index) in tabbars"
                :key="index"
                :to='item.name'
            >
                <span>{{item.title}}</span>
                <template slot="icon" slot-scope="props">
                    <img :src="props.active ? item.active : item.normal">
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { Icon, Tabbar, TabbarItem } from "vant";
export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
    data() {
        return {
            active: 0,
            tabbars: [
                {
                    name: "main",
                    title: "首页",
                    normal: require("../../common/images/index.png"),
                    active: require("../../common/images/index-active.png")
                },
                {
                    name: "flight",
                    title: "航班",
                    normal: require("../../common/images/flight.png"),
                    active: require("../../common/images/flight-active.png")
                },
                {
                    name: "option",
                    title: "功能",
                    normal: require("../../common/images/option.png"),
                    active: require("../../common/images/option-active.png")
                }
            ]
        };
    },
    created(){
        this.upactive();
    },
    updated(){
        this.upactive()
    },
    methods:{				
        upactive(){					
            this.nowPath=this.$route.path;
            console.log(this.$route.path)
            //vue提供的方法          
            if(this.nowPath=="/main" || this.nowPath=="/" ){          	
                this.active=0          
            }else if(this.nowPath=="/flight"){          	
                this.active=1          
            }else if(this.nowPath=="/option"){          	
                this.active=2          
            }				
        }		  
    },
}
</script>
<style lang="stylus" scoped>
#footGuide img {
    width: 1em;
    height: 1em;
}

.van-tabbar-item--active {
    color: #b43864;
}
</style>
