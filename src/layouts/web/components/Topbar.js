/* **************************************************************************
 * Copyright(C) Mega Trade Website, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Abdeen Mohamed < abdeen.mohamed@outlook.com>, September 2019
 ************************************************************************** */

import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/styles'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Hidden, IconButton, Link } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		boxShadow: 'none'
	},
	flexGrow: {
		flexGrow: 1
	},
	rightLink: {
		fontSize: 16,
		marginLeft: theme.spacing(3),
		color: theme.palette.common.white
	},
	linkSecondary: {
		color: theme.palette.secondary.white,
	}
}))

const Topbar = props => {
	const { className, onSidebarOpen, ...rest } = props

	const classes = useStyles()

	const userId = localStorage.getItem('userId')

	return (
		<AppBar
			{...rest}
			className={clsx(classes.root, className)}>
			<Toolbar>
				<RouterLink to='/'>
					<img
						alt='logo'
						src='/images/logo-white.png' />
				</RouterLink>

				<div className={classes.flexGrow} />

				<Hidden mdDown>
					{
						userId
							? <div>
								<Link
									to='/'
									variant='h6'
									color='inherit'
									underline='none'
									component={RouterLink}
									className={classes.rightLink}>
									{'Home'}
								</Link>

								<Link
									variant='h6'
									to='/dashboard'
									color='inherit'
									underline='none'
									component={RouterLink}
									className={classes.rightLink}>
									{'My Account'}
								</Link>
							</div>
							: <div>
								<Link
									to='/'
									variant='h6'
									color='inherit'
									underline='none'
									component={RouterLink}
									className={classes.rightLink}>
									{'Home'}
								</Link>

								<Link
									variant='h6'
									to='/sign-in'
									color='inherit'
									underline='none'
									component={RouterLink}
									className={classes.rightLink}>
									{'Sign In'}
								</Link>
							</div>
					}
				</Hidden>

				<Hidden lgUp>
					<IconButton
						color='inherit'
						onClick={onSidebarOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

Topbar.propTypes = {
	className: PropTypes.string,
	onSidebarOpen: PropTypes.func
}

export default Topbar