import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'shared/shared.dart';
import 'screens/screens.dart';
import 'services/services.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MyApp());
}



class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        // StreamProvider<Report>.value(value: Global.reportRef.documentStream),
        StreamProvider<FirebaseUser>.value(value: AuthService().user),
      ],
      child: MaterialApp(
        routes: {
          '/': (context) => LoginScreen(),
          '/about': (context) => AboutScreen(),
          '/profile': (context) => ProfileScreen(),
          '/topics': (BuildContext context) {
            return Scaffold(
              appBar: AppBar(
                title: const Text('Topics Screen'),
              ),
              bottomNavigationBar: AppBottomNav(),
            );
          },
          // '/profile': (BuildContext context) {
          //   return Scaffold(
          //     appBar: AppBar(title: Text('Profile Screen'), backgroundColor: Colors.blue),
          //     body: Center(child: Text('About this app...'),),
          //   );
          // },
        },
        theme: ThemeData(
          fontFamily: 'Nunito',
          bottomAppBarTheme: BottomAppBarTheme(
            color: Colors.black87,
          ),
          brightness: Brightness.dark,
          textTheme: TextTheme(
            body1: TextStyle(fontSize: 18),
            body2: TextStyle(fontSize: 16),
            button: TextStyle(letterSpacing: 1.5, fontWeight: FontWeight.bold),
            headline: TextStyle(fontWeight: FontWeight.bold),
            subhead: TextStyle(color: Colors.grey),
          ),
          buttonTheme: ButtonThemeData(),
        ),
      ),
    );
  }
}
