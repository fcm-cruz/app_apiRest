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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u694610544_blog' );

/** Database username */
define( 'DB_USER', 'u694610544_admin' );

/** Database password */
define( 'DB_PASSWORD', 'Dev-fernando01' );

/** Database hostname */
define( 'DB_HOST', '185.239.210.154' );

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
define( 'AUTH_KEY',         'b#)97)MGudHDeS6*aBz*#8[Z/kZe*=Y~g^)9CPYp*j4}RlS(`)@#K8y.l~S7N(U6' );
define( 'SECURE_AUTH_KEY',  'ZT1f^!T;W4%vjq_~<y,I5voT#p{a3qX+e#UO9f!5bWDZ-e&Tv!>ExZQ4~bz-d:fP' );
define( 'LOGGED_IN_KEY',    'm x>yT#{v00;>)sB.#yX%VK+g(VnG3`GzFmY-n)}r<<+mUX}IP~gKb(%CnPH@,H#' );
define( 'NONCE_KEY',        'jTDy,0wpPJ/atS:({-=jzLoK::a01~z.rr]V/U[_wNAQ!cgPj#BYwjCSUPm8~]vv' );
define( 'AUTH_SALT',        'Axlq5H Q@)FVVLg/AG1?0hYwmoJ5_x;EEw*po-Lkr<HkP``ObWj[Wi[|Q5r^b ,i' );
define( 'SECURE_AUTH_SALT', 'O`Bqhf7l^wI5DiiL1rq:]SC,y{jY|Y3~/BJlKrDukCx;3jL@Ajgo!*)906A]{.r/' );
define( 'LOGGED_IN_SALT',   'hqD-A Zh?V*0z%O{2Bdga Ahw|wa-K7 ;_yq(OFB^rMl]o0-qG}%-_KSL)hzfzIb' );
define( 'NONCE_SALT',       'p_6*6<T*~q!]~}I~FbHq>gq{I{q4*/#_Ge^c664q3W*%B!#}U X0~s5Uuh<:Ha(y' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
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
