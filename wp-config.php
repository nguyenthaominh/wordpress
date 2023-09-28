<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ntm_wp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'WTpT,AXw 2#0 qqnX%s*<5!&aI>Nl(4k?FE50qS</JU?^gI7T>j_oP#MHaEdX;`i' );
define( 'SECURE_AUTH_KEY',  'O2l;P{{NHjK@Hq-pv?T}E!l3kw-jzTxJDc_l5:@]RI#AAs<WDP,=R6+Ewmp]%0`)' );
define( 'LOGGED_IN_KEY',    '3h]KkmUF+-</[Xg_@z?,/h  )Xglv_Y&AwWp>DMcK^9Sl`M1eOC1U4Kw$Y8!![*y' );
define( 'NONCE_KEY',        '/MZpcj}6`?k7-{_4ke<`NUTNsMu/5r7cs]x;?mm9_6!BK>S&;2N}GnSr%v&9ePG6' );
define( 'AUTH_SALT',        '-c5FfVOB.2%`aL}4|NlW_c;tLiaFmys_yT%gU&BL>UriqQ8V,GO/Lfk/Zw,^bv9~' );
define( 'SECURE_AUTH_SALT', '*^[OS{zoP?}x6F?fXTQtm:u];tDFbc2%}E,L8R=c=oXa%x#&]Qf>x! 1I{DzVpVk' );
define( 'LOGGED_IN_SALT',   'R4ha1]l2+U}2EM=a2Etse%MOxA6oD,^[wjQtf*Yv&)T7GuK{i($)3;K,II;CYU+W' );
define( 'NONCE_SALT',       '=S#{<2xs<r=Ox G*09_P^nw[?`9I[vs*-:ICoh(9CrUBp=ECK6$xP2o#DC@nK7.N' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ntm_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
