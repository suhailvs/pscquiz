import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
import 'dart:async';

class AuthService {
  final GoogleSignIn _googleSignIn = GoogleSignIn();
  final FirebaseAuth _auth = FirebaseAuth.instance;
  // final Firestore _db = Firestore.instance;

  // Firebase user one-time fetch
  User get getUser => _auth.currentUser;

  // Firebase user a realtime stream
  Stream<User> get user => _auth.authStateChanges();

  /// Sign in with Google
  Future<User> googleSignIn() async {
    try {
      GoogleSignInAccount googleSignInAccount = await _googleSignIn.signIn();
      GoogleSignInAuthentication googleAuth =
          await googleSignInAccount.authentication;

      final AuthCredential credential = GoogleAuthProvider.credential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );

      UserCredential result = await _auth.signInWithCredential(credential);
      User user = result.user;

      // Update user data
      updateUserData(user);

      return user;
    } catch (error) {
      print(error);
      return null;
    }
  }

  /// Anonymous Firebase login
  Future<User> anonLogin() async {
    final User user = (await _auth.signInAnonymously()).user;

    updateUserData(user);
    return user;
  }

  /// Updates the User's data in Firestore on each new login
  // Future<void> updateUserData(User user) {
  //   DocumentReference reportRef = _db.collection('reports').document(user.uid);

  //   return reportRef.setData({'uid': user.uid, 'lastActivity': DateTime.now()},
  //       merge: true);
  // }

  Future<void> updateUserData(User user) {
    // DocumentReference reportRef = _db.collection('reports').document(user.uid);

    // return reportRef.setData({'uid': user.uid, 'lastActivity': DateTime.now()},
    //     merge: true);
  }

  // Sign out
  Future<void> signOut() {
    return _auth.signOut();
  }
}
