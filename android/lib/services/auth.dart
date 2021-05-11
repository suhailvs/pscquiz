import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
import 'dart:async';

class AuthService {
  final GoogleSignIn _googleSignIn = GoogleSignIn();
  final FirebaseAuth _auth = FirebaseAuth.instance;
  // final Firestore _db = Firestore.instance;

  // Firebase user one-time fetch
  Future<FirebaseUser> get getUser => _auth.currentUser();

  // Firebase user a realtime stream
  Stream<FirebaseUser> get user => _auth.onAuthStateChanged;

  /// Sign in with Google
  Future<FirebaseUser> googleSignIn() async {
    try {
      GoogleSignInAccount googleSignInAccount = await _googleSignIn.signIn();
      GoogleSignInAuthentication googleAuth =
          await googleSignInAccount.authentication;

      final AuthCredential credential = GoogleAuthProvider.getCredential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );

      AuthResult result = await _auth.signInWithCredential(credential);
      FirebaseUser user = result.user;

      // Update user data
      updateUserData(user);

      return user;
    } catch (error) {
      print(error);
      return null;
    }
  }

  /// Anonymous Firebase login
  Future<FirebaseUser> anonLogin() async {
    AuthResult result = await _auth.signInAnonymously();
    FirebaseUser user = result.user;

    updateUserData(user);
    return user;
  }

  /// Updates the User's data in Firestore on each new login
  // Future<void> updateUserData(FirebaseUser user) {
  //   DocumentReference reportRef = _db.collection('reports').document(user.uid);

  //   return reportRef.setData({'uid': user.uid, 'lastActivity': DateTime.now()},
  //       merge: true);
  // }

  Future<void> updateUserData(FirebaseUser user) {
    // DocumentReference reportRef = _db.collection('reports').document(user.uid);

    // return reportRef.setData({'uid': user.uid, 'lastActivity': DateTime.now()},
    //     merge: true);
  }

  // Sign out
  Future<void> signOut() {
    return _auth.signOut();
  }
}
