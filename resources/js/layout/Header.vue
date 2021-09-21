<template>
	<div class="header" :class="[{'overlay': isMobile && mobileMenu.overlay}]">
		<div class="column logo">
      <router-link to="/">
        <img src="/" alt="logo">
      </router-link>
    </div>
		<div
      class="column text-align-end is-flex flex-align-center flex-justify-center links"
    >
			<span class="" v-for="(link, key) in nav.links" :key="key" v-if="!isMobile">
				<router-link 
					:to="link.url"
					:class="[{'active': key === 1}]"
				>
					{{link.name}}
				</router-link>
			</span>
      <template v-if="isMobile">
        <button
          :class="['column is-narrow navbar-burger']"
          v-if="0"
        >
          <span class="first"></span>
          <span class="second"></span>
          <span class="third"></span>
        </button>
        <span @click="openMobileMenu">Open</span>
      </template>
		</div>
    <div class="menu-items" v-if="isMobile && mobileMenu.overlay">
      <span
        class="is-block"
        :class="[{'active': key === 1}]"
        v-for="(link, key) in nav.links" :key="key"
        v-if="isMobile"
      >
				<router-link
          :to="link.url"
          :class="[{'active': key === 1}]"
        >
					{{link.name}}
				</router-link>
			</span>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data () {
			return {
				nav: {
					links: [
						{name: 'Dashboard', url: '/'},
						{name: 'Events', url: '/'},
						{name: 'Help', url: '/'},
						{name: 'Logout', url: '/'}
					]
				},
        mobileMenu: {overlay: false}
			}
		},
    computed: {
      /**
       * Check if app is in mobile view
       * @return {boolean}
       */
      isMobile () {
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      openMobileMenu () {
        this.mobileMenu.overlay = !this.mobileMenu.overlay
      }
    }
	}
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		padding: 8px 30px;
		display: inline-flex;
		background: #5C524D;

    &.overlay {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 1;
      position: fixed;
      background-color: #5C524D;
    }
		.logo {
			img {
        cursor: pointer;
				height: 40px;
			}
		}
		.links {
			a {
				color: rgba(255, 255, 255, 0.75);
				font-size: 18px;
				font-weight: bold;
				text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
				font-family: Almarai;
				text-decoration: none;

				&.active {
					border-bottom: 4px solid #86EAAE;
				}
			}
			span {
				padding: 0 10px;
			}
		}

    /*Mobile and Tablet view*/
    @media screen and (max-width: 1200px) {
      .logo {
        img {
          height: 30px;
        }
      }
      .links {
        .navbar-burger {
          border: 0;
          bottom: 5px;
          color: #ffffff;
          display: block;
          background-color: transparent;

          &.is-active {
            .third {
              top: calc(53% - 1px) !important;
            }
          }
          &.active-blue {
            color: red;
          }
          span {
            width: 25px;
            display: block;
            height: 2px;
            left: calc(50% - 8px);
            position: absolute;
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transition-duration: 86ms;
            transition-duration: 86ms;
            -webkit-transition-property: background-color, opacity, -webkit-transform;
            transition-property: background-color, opacity, -webkit-transform;
            transition-property: background-color, opacity, transform;
            transition-property: background-color, opacity, transform, -webkit-transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
            background-color: currentColor;

            &:first-child {
              top: calc(50% - 6px);
            }
          }
          .first {
            top: calc(44% - 6px) !important;
          }
          .third {
            top: calc(66% - 1px);
          }
        }
      }
      .menu-items {
        top: calc(100% - 92%);
        width: calc(100% - 25%);
        z-index: 2;
        position: absolute;

        .is-block {
          margin: 40px 0;
          padding: 10px 0;

          &.active {
            border-bottom: 2px solid #86EAAE;
          }
        }
        .router-link-active {
          color: rgba(255, 255, 255, 0.75);
          font-size: 18px;
          font-weight: bold;
          text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
          text-decoration: none;
        }
      }
    }
	}
</style>